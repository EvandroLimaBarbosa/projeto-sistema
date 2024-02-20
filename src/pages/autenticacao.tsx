import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div>
      <h1>Autenticação</h1>
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
    </div>
  )
}