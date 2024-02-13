import { CalendarIcon, ComputerIcon, ExitIcon, HomeIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
  return (
    <aside className="flex flex-col">
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemMenu url="/" text="Início" icon={HomeIcon} />
        <ItemMenu url="/agenda" text="Agenda" icon={CalendarIcon} />
        <ItemMenu url="/logo" text="Logo" icon={ComputerIcon} />
      </ul>
      <ul className="">
        <ItemMenu url="/configuracao" text="Opções" icon={SettingsIcon} />
        <ItemMenu className={`text-red-600 hover:bg-red-600 hover:text-white`} onClick={() => console.log('saiu')} text="Sair" icon={ExitIcon} />
      </ul>
    </aside>
  )
}