import { CalendarIcon, ExitIcon, HomeIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";

export default function SideMenu() {
  return (
    <aside>
      <ul>
        <ItemMenu url="/" text="Início" icon={HomeIcon} />
        <ItemMenu url="/ajustes" text="Configuração" icon={CalendarIcon} />
        <ItemMenu url="/agenda" text="Agenda" icon={SettingsIcon} />
        <ItemMenu url="/Sair" text="Sair" icon={ExitIcon} />
      </ul>
    </aside>
  )
}