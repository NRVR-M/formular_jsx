import { Link } from "react-router-dom";

function MainNavigation() {
    return (

        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tagesmenu" className="nav-link"> Tagesmenü</Link>
                </li>
                <li className="nav-item">
                    <Link to="/lunch-menu" className="nav-link">Mittagsmenü</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <Link to="/eingeloggt" className="nav-link">Eingeloggt</Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}

export default MainNavigation;
