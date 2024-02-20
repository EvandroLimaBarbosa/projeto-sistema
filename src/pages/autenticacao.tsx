import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon } from "../components/icons";
import Logo from "../components/template/Logo";

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submit = () => {
    if (modo === 'login') {
      console.log('login')
    } else {
      console.log('cadastrar')
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2">
        <h1 className={`
        flex items-center justify-center text-xl font-bold mb-3
      `}>
          <Logo />
          {/* {modo === 'login' ? 'Login' : 'Cadastro'} */}
        </h1>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          changeValue={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          changeValue={setPassword}
          required />
        <AuthInput
          label="Confirmar senha"
          type="password"
          value={confirmPassword}
          changeValue={setConfirmPassword}
          required
          noRenderWhen={true} />

        <button type="button" onClick={submit}
          className={`
            w-full bg-indigo-500 hover:bg-indigo-400
           text-white rounded-lg px-4 py-3 mt-2
      `}>
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <div className="flex flex-row h-6 my-1">
          <div className="h-px flex-grow bg-gray-300 top-3 relative block shrink">
          </div>
          <div className="flex justify-center items-center uppercase font-semibold text-xs text-gray-400 mx-4 relative">ou</div>
          <div className="h-px flex-grow bg-gray-300 top-3 relative block shrink">
          </div>
        </div>

        <button type="button" onClick={submit}
          className={`
            w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3
      `}>
          Entrar com Google
        </button>
      </div>
    </div>
  )
}