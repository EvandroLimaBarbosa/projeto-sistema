interface AuthInputProps {
  label: string
  value: any
  required?: boolean
  noRenderWhen?: boolean
  type?: 'text' | 'email' | 'password'
  changeValue: (novoValor: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return props.noRenderWhen ? null : (
    <div className="flex flex-col">
      <input
        type={props.type ?? 'text'}
        placeholder={props.label}
        value={props.value}
        onChange={e => props.changeValue?.(e.target.value)}
        required={props.required} />
    </div>
  )
}