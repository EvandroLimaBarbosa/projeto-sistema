import { MoonIcon, SunIcon } from "../icons";

interface BotaoAlternarTemaProps {
  tema: string | undefined;
  alternarTema: (() => void) | undefined;
}

export default function BotaoAlternarTema({ tema, alternarTema }: BotaoAlternarTemaProps) {
  const isDarkTheme = tema === "dark";

  return (
    <div
      onClick={alternarTema}
      className={`
        mt-1 flex items-center cursor-pointer
        ${isDarkTheme ? "bg-gradient-to-r from-gray-500 to-gray-900" : "bg-gradient-to-r from-yellow-300 to-yellow-600"}
        w-14 lg:w-24 h-8 p-1 rounded-full
      `}
    >
      {!isDarkTheme && (
        <div
          className={`
            flex items-center justify-center
            bg-white text-yellow-600
            w-6 h-6 rounded-full
          `}
        >
          {SunIcon(5)}
        </div>
      )}
      <span
        className={`
          flex items-center ml-2 text-sm
          ${isDarkTheme ? "text-gray-300" : "text-white"}
        `}
      >
        {isDarkTheme ? "Escuro" : "Claro"}
      </span>
      {isDarkTheme && (
        <div
          className={`
            flex items-center justify-center
            bg-gray-800 text-white
            w-6 h-6 rounded-full ml-auto
          `}
        >
          {MoonIcon(5)}
        </div>
      )}
    </div>
  );
}