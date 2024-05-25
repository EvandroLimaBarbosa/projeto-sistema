import { Box } from "@mui/material";
import useAuth from "../../data/hook/useAuth";
import { CalendarIcon, ComputerIcon, ExitIcon, HomeIcon, SettingsIcon } from "../icons";
import ItemMenu from "./ItemMenu";
import LogoDestakVidros from "./LogoDestakVidros";

export default function SideMenu() {
  const { logout } = useAuth()

  return (
    <aside className={`
      flex flex-col bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800
        h-20 w-20
      `}>
        <LogoDestakVidros />
      </div>
      <Box className="flex flex-col justify-between h-[calc(100vh-85px)]">
        <ul>
          <ItemMenu url="/" text="Início" icon={HomeIcon} />
          <ItemMenu url="/agenda" text="Agenda" icon={CalendarIcon} />
        </ul>
        <ul>
          <ItemMenu url="/ajustes" text="Ajustes" icon={SettingsIcon} />
          <ItemMenu className={`
          text-red-600 hover:bg-red-500 hover:text-white  
          dark:text-red-400 dark:hover:bg-red-700 dark:hover:text-white
        `} onClick={logout} text="Sair" icon={ExitIcon} />
        </ul>
      </Box>
    </aside>
  )
}
