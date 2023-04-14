import Logo from '../utils/img/Logo.png'
import MainNavigation from "../components/MainNavigation";

export default function Header() {
    return(
        <nav className="nav-bar" style={{backgroundColor: "lightgrey"}}>
            <p>
                <img src={Logo} alt="logo" height="50" />
                <p>Test Header für browserRouter{<MainNavigation />}</p>

            </p>
        </nav>
    )
}