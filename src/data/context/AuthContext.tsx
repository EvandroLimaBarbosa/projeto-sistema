
import route from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'


interface AuthContextProps {
    user?: User | null
    loginGoogle?: () => Promise<void>
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

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User | null>(null)

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if (resp.user?.email) {
            const user = await userNormal(resp.user)
            setUser(user)
            route.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext
