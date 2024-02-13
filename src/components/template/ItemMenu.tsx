import Link from "next/link";

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  onClick?: (evento: any) => void;
  className?: string;
}

export default function ItemMenu(props: MenuItemProps) {
  const renderLink = () => {
    return <a className={`
    flex flex-col justify-center items-center w-20 h-20 text-gray-600 
    dark:text-gray-400
    ${props.className}
  `} href={props.url}>
      {props.icon}
      <span className={`
         text-xs font-light
    `}>
        {props.text}
      </span>
    </a>
  }
  return (
    <li onClick={props.onClick} className={`
    hover:bg-gray-100 cursor-pointer
    dark:hover:bg-gray-800
      `}>
      {props.url ? (
        <Link legacyBehavior href={props.url}>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  )
}