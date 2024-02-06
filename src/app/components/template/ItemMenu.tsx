import Link from "next/link";

interface MenuItemProps {
  url: string;
  text: string;
  icon: any;
}

export default function ItemMenu(props: MenuItemProps) {
  return (
    <li className={`hover:bg-gray-100`}>
      <Link href={props.url}>
        <a className={`flex flex-col`}>
          {props.icon}
          <span>{props.text}</span>
        </a>
      </Link>
    </li>
  )
}