
import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'


interface AuthContextProps {
    user?: User | null
    loading?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormal(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0],
        imgUrl: userFirebase.photoURL
    }
}

function gerenciarCookie(logado: string) {
    if (logado) {
        Cookies.set('admin-template-projeto-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-projeto-auth')
    }
}

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    async function configSession(userFirebase: any) {
        if (userFirebase?.email) {
            const user = await userNormal(userFirebase)
            setUser(user)
            gerenciarCookie('logado');
            return user.email
        } else {
            setUser(null)
            gerenciarCookie('');
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-projeto-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext
