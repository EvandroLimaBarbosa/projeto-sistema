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
    <div className="flex flex-col mb-2">
      <input
        type={props.type ?? 'text'}
        placeholder={props.label}
        value={props.value}
        onChange={e => props.changeValue?.(e.target.value)}
        required={props.required}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 outline-none
          border border-gray-400  border-opacity-60 focus:border-blue-500 focus:border-opacity-60 focus:bg-gray-100
          focus:outline-none 
        `} />
    </div>
  )
}