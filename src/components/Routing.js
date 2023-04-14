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
import Eingeloggt from "../pages/Eingeloggt";

export default function Routes() {

    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }

    // const BrowserRoutes = () => {
    //     return (
    //             <BrowserRouter>
    //                 <Routes>
    //                     {/*Parent*/}
    //                     <Route path="/" element={<Layout />}>
    //                         {/*Children*/}
    //                         <Route path="/" element={<Home />} />
    //                         <Route path="login" element={<Login />} />
    //                         <Route path="tagesmenu" element={<Tagesmenu />} />
    //                         <Route path="lunch-menu" element={<LunchMenu />} />
    //                     </Route>
    //                 </Routes>
    //             </BrowserRouter>
    //         )
    // }

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

                    path: "/eingeloggt",
                    element: <Eingeloggt />
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
            // <BrowserRoutes />
        <RouterProvider router={BrowserRoutes} />
    )
}