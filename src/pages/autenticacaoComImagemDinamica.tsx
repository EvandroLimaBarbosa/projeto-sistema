import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { GoogleIcon, WarnIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { cadastrar, login } = useAuth()

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const displayError = (msg: any, timeInSeconds: number = 5) => {
    setErro(msg)
    setTimeout(() => { setErro(null) }, timeInSeconds * 1000)
  }

  const submit = async (event: any) => {
    event.preventDefault();
    try {
      if (modo === 'login') {
        if (login) {
          await login(email, password)
        } else {
          throw new Error('Função de login não definida')
        }
      } else {
        if (cadastrar) {
          await cadastrar(email, password)
        } else {
          throw new Error('Função de cadastrar não definida')
        }
      }
    } catch (e: any) {
      if (e.code == "auth/weak-password") {
        displayError('A senha deve ter pelo menos 6 caracteres')
      } else if (e.code == "auth/invalid-email") {
        displayError('O endereço de email está formatado incorretamente')
      } else if (e.code == "auth/internal-error") {
        displayError('Erro ao fazer autenticação')
      } else {
        console.log(e)
        displayError(e?.message ?? 'Erro desconhecido!')
      }
    }
  }


  return (
    <div className="flex h-auto md:h-full justify-center bg-blue-950">
      <div className="hidden md:block md:h-auto md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticacao"
          className="h-screen w-full object-cover" />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-col justify-center items-center mt-5 mb-14">
        </div>
        <div className={`
          bg-white py-8 px-7 lg:px-10 rounded-xl
        `}>
          <h1 className={`
            flex items-center justify-center text-xl font-bold
        `}>
            {modo === 'login' ? 'Entre com Sua Conta' : 'Crie uma Nova Conta'}
          </h1>

          <div className={`
                flex items-center 
                rounded-lg
                transition-opacity duration-500 ease-in-out
                bg-red-400 text-white px-5 mb-2 
                ${erro ? 'opacity-100' : 'opacity-0'}
                `}>
            {WarnIcon()}
            <span className={`ml-2 ${erro ? 'opacity-100' : 'opacity-0'}`}>{erro}</span>
          </div>

          <form onSubmit={submit}>
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
              noRenderWhen={modo === 'login'} />
            <button type="submit"
              className={`
                w-full bg-indigo-500 hover:bg-indigo-400
              text-white rounded-lg px-4 py-3 mt-2
              `}>
              {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>

          <div className="flex flex-row h-6 my-1">
            <div className="h-px flex-grow bg-gray-300 top-3 relative block shrink">
            </div>
            <div className="flex justify-center items-center uppercase font-semibold text-xs text-gray-400 mx-4 relative">ou</div>
            <div className="h-px flex-grow bg-gray-300 top-3 relative block shrink">
            </div>
          </div>

          {modo === 'login' ? (
            <p className="mt-8">
              Novo aqui ?
              <a onClick={() => setModo('cadastro')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}> Crie uma nova conta</a>
            </p>
          ) : (
            <p className="mt-8">
              Já tem cadastro?
              <a onClick={() => setModo('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}> Entre com sua conta</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}