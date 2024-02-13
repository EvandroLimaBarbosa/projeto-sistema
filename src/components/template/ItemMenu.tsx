import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

export default function ItemMenu(props: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link className={`
          flex flex-col justify-center items-center 
          w-20 h-20
        `} href={props.url}>
        {props.icon}
        <span className={`
          text-xs font-light text-gray-600
          `}>
          {props.text}
        </span>
      </Link>
    </li>
  )
}