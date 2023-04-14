import Logo from '../utils/img/Logo.png'
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";

export default function Header() {

    // const [status, setStatus ] useState()


    return(
        <nav className="nav-bar" style={{backgroundColor: "lightgrey"}}>

                <img src={Logo} alt="logo" height="50" />
                <p>Test Header für browserRouter</p>
            {<MainNavigation />}

        </nav>
    )
}