import useAppData from "@/src/data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { tema, alternarTema } = useAppData()
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
        <UserAvatar className="ml-3"/>
      </div>
    </div>
  )
}