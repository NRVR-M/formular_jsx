import Logo from '../utils/img/Logo.png'
import MainNavigation from "../components/MainNavigation";

import logged_out from "../utils/img/logged_out.png";


export default function Header() {

    // const [status, setStatus ] useState()


    return(
        <nav className="nav-bar" style={{backgroundColor: "lightgrey"}}>
            <img src={logged_out} style={{float: "right", marginRight: 50, marginTop:10}} />
                <img src={Logo} alt="logo" height="50" />

            {<MainNavigation />}


        </nav>
    )
}