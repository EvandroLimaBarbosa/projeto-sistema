import { CalendarIcon, ComputerIcon, ExitIcon, HomeIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function SideMenu() {
  return (
    <aside>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo/>
      </div>
      <ul>
        <ItemMenu url="/" text="Início" icon={HomeIcon} />
        <ItemMenu url="/agenda" text="Agenda" icon={CalendarIcon} />
        <ItemMenu url="/configuracao" text="Configuração" icon={SettingsIcon} />
        <ItemMenu url="/logo" text="Logo" icon={ComputerIcon} />
        <ItemMenu url="/Sair" text="Sair" icon={ExitIcon} />
      </ul>
    </aside>
  )
}