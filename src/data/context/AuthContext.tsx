
import route from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'


interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

// async function userNormal(userFirebase: firebase.User): Promise<User> {
//     const token = await userFirebase.getIdToken()
//     return {
//         uid: userFirebase.uid,
//         name: userFirebase.displayName,
//         email: userFirebase.email,
//         token,
//         provider: userFirebase.providerData[0].providerId,
//         imgUrl: userFirebase.photoURL
//     }
// }

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User | undefined>(undefined)

    async function loginGoogle() {
        console.log('Login google...')
        route.push('/')
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
