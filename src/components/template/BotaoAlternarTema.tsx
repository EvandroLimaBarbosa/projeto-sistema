import { MoonIcon, SunIcon } from "../icons"

interface BotaoAlternarTemaProps {
  tema: string | undefined
  alternarTema: (() => void) | undefined
}
export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div onClick={props.alternarTema}>
      <div className={`
      
      `}>
        {SunIcon}
      </div>
      <div className={`
      
      `}>
        Claro
      </div>
    </div>
  ) : (
    <div onClick={props.alternarTema}>
      <div className={`
      
      `}>
        {MoonIcon}
      </div>
      <div className={`
      
      `}>
        Escuro
      </div>
    </div>
  )
}