
import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'


interface AuthContextProps {
    user?: User | null
    loading?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
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

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-projeto-auth', String(logado), {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-projeto-auth')
    }
}

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function configSession(userFirebase: any) {
        if (userFirebase?.email) {
            const user = await userNormal(userFirebase)
            setUser(user)
            gerenciarCookie(true);
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            gerenciarCookie(false);
            setLoading(false)
            return false
        }
    }

    async function cadastrar(email: string, senha: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, senha)
            await configSession(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, senha: string) {
        try {
            setLoading(true)
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, senha)
            await configSession(resp.user)
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
            cadastrar,
            login,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext
