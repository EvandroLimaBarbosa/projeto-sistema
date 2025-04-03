import useAppData from "@/src/data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";
import ForceAuth from "../auth/ForceAuth";

interface LayoutProps {
  title?: string;
  subtitle?: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData()
  return (
    <ForceAuth>
      <div className={`${tema} flex h-full w-screen`}>
        <SideMenu />
        <div className={`
        flex flex-col w-full p-7 bg-gray-300
      dark:bg-gray-800
      `}>
          <Header title={props.title ?? ''} subtitle={props.subtitle ?? ''} />
          <Content>
            {props.children}
          </Content>
        </div>
      </div>
    </ForceAuth>
  )
}