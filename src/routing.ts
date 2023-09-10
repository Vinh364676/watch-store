import { ROUTE_PATHS } from "./constants/url-config";
import { PERMISSION } from "./guards/role-guard";
import HomePage from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';

export interface Route {
    groupIndex?: number
    href: string
    exact: boolean
    component: any
    title: string
    hidden?: boolean
    icon?: any
    forAdmin?: boolean
    loginRequired?: boolean
    permissions: PERMISSION[]
    subMenu?: SubMenu[]
}

interface SubMenu {
    href: string
    title: string
}

const anonymousPage: Route[] = [
    {
        href: ROUTE_PATHS.SignIn,
        title: "",
        exact: true,
        component: SignIn,
        hidden: true,
        permissions: [],
    },
]

const authorizedPage: Route[] = [
    {
        href: ROUTE_PATHS.Home,
        exact: true,
        component: HomePage,
        title: "Home",
        permissions: [],
        loginRequired: false,
    },
]

export const routes: Route[] = [...anonymousPage, ...authorizedPage]