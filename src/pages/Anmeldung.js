import React, {useState } from "react";

//Pages
import GetPers from "../components/GetPers";
import {useLocation, useNavigate} from "react-router-dom";


function Anmeldung() {

    const authToken = localStorage.getItem("auth") ?? null;
    const [errorMessage, setErrorMessage] = useState("");
    const raw = {key: "DqRestTest1", text: "Test: {{DqDataTs}} UUID: {{DqDataUuid}}"}

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    async function handleAnmeldung(e) {
        e.preventDefault();

    try {
        const response = await fetch("https://4dtestapi.dataquest.ch/rest/v2/dqdata", {

            method: "POST",
            headers:
                {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(raw),

        });

        const data = await response.json();
        console.log(data);
        navigate(from, {replace: true});
        localStorage.removeItem("auth");

    } catch (error) {
        console.error(error);
        setErrorMessage("Unerwarteter Fehler beim Login-Versuch.");

    }

}

return(
   <>
       <div>
           <p style={{color: "green"}}>Du bist eingeloggt</p>
       </div>
       <br/>
       <form onSubmit={handleAnmeldung}>
            <div>
                <GetPers />
            </div>
            <br/>
            <div>
               <p>Menüwahl: </p>
               <input type="radio" id="html" name="menuwahl" value="vegi" />
               <label htmlFor="html">Vegi</label><br/>
               <input type="radio" id="css" name="menuwahl" value="fleisch" />
               <label htmlFor="html">Fleisch</label><br/>
               <input type="radio" id="js" name="menuwahl" value="salat" />
               <label htmlFor="html">Salat</label>
            </div>
           <div>
               <br/>
               <label>Datum: <input id="datum" type="date" name="datum"/>
               </label>
           </div>
           <br/>
           <div>
               <label>Zeit: </label>
               <input type="time" id="zeit" name="zeit" min="12:00" max="14:00" />
           </div>
            <div>
               <br/>
               <input type="submit" value="Abschicken und ausloggen"/>
            </div>
           {errorMessage}
       </form>

   </>
)
}
export default Anmeldung;