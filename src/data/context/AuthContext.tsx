import { createContext, useState } from "react";
import { User as FirebaseUser } from 'firebase/auth';
import User from '../../model/User'

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormal(userFirebase: FirebaseUser): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        imgUrl: userFirebase.photoURL
    }
}

export function AuthProvider(props: any) {
    const [user, setuser] = useState<User | undefined>()

    async function loginGoogle() {

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
