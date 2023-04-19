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
        JSON.stringify(data)
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
       <p style={{color: "green", margin: 20}}>Du bist eingeloggt</p>
       <form
           class="row g-1"
           style={{margin: 20}}
           onSubmit={handleAnmeldung}>
           <label htmlFor="formGroupExampleInput"><p className="fs-5">Anmeldung für Mittagsmenü</p></label>

           <div class="mb-3">
                <GetPers />
            </div>

           <div class="col-md-2">
               <label>Datum:</label>
               <input class="form-control" id="datum" type="date" name="datum" required/>
           </div>

           <div class="mb-1"></div>

           <div class="col-md-2">
               <label>Zeit:</label>
               <input class="form-control" type="time" id="zeit" name="zeit" min="12:00" max="14:00" required/>
           </div>

           <div class="form-check" style={{marginTop: 20}}>
               <input class="form-check-input" type="radio" id="html" name="menuwahl" value="vegi" required/>
               <label class="form-check-label" htmlFor="html">Vegi</label><br/>
               <input class="form-check-input" type="radio" id="css" name="menuwahl" value="fleisch"/>
               <label clas="form-check-label" htmlFor="html">Fleisch</label><br/>
               <input class="form-check-input" type="radio" id="js" name="menuwahl" value="salat"/>
               <label class="form-check-label" htmlFor="html">Salat</label>
           </div>
           <div class="mb-3" style={{marginTop: 20}}>
               <input type="submit" value="Abschicken und ausloggen"/>
           </div>
           {errorMessage}
       </form>
   </>
)
}
export default Anmeldung;