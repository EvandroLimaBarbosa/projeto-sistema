import useAppData from "@/src/data/hook/useAppData";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { tema } = useAppData()
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <UserAvatar className="ml-3"/>
      </div>
    </div>
  )
}