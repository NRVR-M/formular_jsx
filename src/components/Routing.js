// import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//components
import Header from "./Header";
import RequireAuth from "./RequireAuth";

//pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tagesmenu from "../pages/Tagesmenu";
import LunchMenu from "../pages/LunchMenu";
import Anmeldung from "../pages/Anmeldung";

export default function Routes() {

    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }

const BrowserRoutes = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                element: <RequireAuth />,
                children: [{

                    path: "/anmeldung",
                    element: <Anmeldung />
                },]
            },
            {
                path: "/tagesmenu",
                element: <Tagesmenu />
            },
            {
                path: "/lunch-menu",
                element: <LunchMenu />
            },
        ]

    }
])

    return(
        <RouterProvider router={BrowserRoutes} />
    )
}