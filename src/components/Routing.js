import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

//components
import Header from "./Header";

//pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Tagesmenu from "../pages/Tagesmenu";
import LunchMenu from "../pages/LunchMenu";

export default function ProtectedRoutes() {

    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
                <BrowserRouter>
                    <Routes>
                        {/*Parent*/}
                        <Route path="/" element={<Layout />}>
                            {/*Children*/}
                            <Route path="/" element={<Home />} />
                            <Route path="login" element={<Login />} />
                            <Route path="tagesmenu" element={<Tagesmenu />} />
                            <Route path="lunch-menu" element={<LunchMenu />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )

    }

    return(
            <BrowserRoutes />
    )
}