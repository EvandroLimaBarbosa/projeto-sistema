import { CalendarIcon, ExitIcon, HomeIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";

export default function SideMenu() {
  return (
    <aside>
      <ul>
        <ItemMenu url="/" text="Início" icon={HomeIcon} />
        <ItemMenu url="/agenda" text="Agenda" icon={CalendarIcon} />
        <ItemMenu url="/configuracao" text="Configuração" icon={SettingsIcon} />
        <ItemMenu url="/Sair" text="Sair" icon={ExitIcon} />
      </ul>
    </aside>
  )
}