import MainNavigation from "../components/MainNavigation";
import { useNavigate } from "react-router-dom";

function Eingeloggt() {

    const navigate = useNavigate();

    return(
        <div>
            <header>
                <MainNavigation />
                erfolgreich eingeloggt
            </header>
            <form>
                <button onClick={() => navigate('/login')}>Log out</button>
            </form>

        </div>
    )
}
export default Eingeloggt;