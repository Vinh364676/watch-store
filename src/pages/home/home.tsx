import { RouteChildrenProps } from "react-router";
import { LayoutProps } from "../../components/views/layout/route-layout";
import "./home.scss"

interface Props extends RouteChildrenProps, LayoutProps { }

export default function HomePage(props: Props) {
  return (
    <h1 className="homepage" >Home page</h1>
  )
}