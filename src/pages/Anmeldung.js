import React, {useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";


function Anmeldung() {

    const [persons, setPersons] = useState([]);

    const [formData, setFormData] = useState({
        person: "",
        date: "",
        time: "",
        menu: "",
    })

    const [errorMessage, setErrorMessage] = useState("");

    const authToken = localStorage.getItem("auth") ?? null;
    const raw = {key: "mbu", text: JSON.stringify(formData)}

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


//Personenliste laden und erstellen
    async function getPersons() {

        try {
            const response = await fetch('https://4dtestapi.dataquest.ch/rest/v2/pers?query="Inaktiv=false"&attributes=PersNr,LgOrtCode,NameVorname', {
                method: "GET",
                headers:
                    {
                        Authorization: `Basic ${process.env.REACT_APP_API_AUTH_CREDENTIALS}`,
                        "Content-Type": "application/json"
                    }
            });

            const result = await response.json();
            console.log("Success:", result);
            setPersons(result.data)


        }       catch (error) {
            console.error("Error:", error);
        }

    }

    useEffect(() => {
        getPersons()
    }, [])


//Anmeldung ausführen

    async function handleAnmeldung(e) {
        e.preventDefault();

    try {
        const response = await fetch("https://4dtestapi.dataquest.ch/rest/v2/dqdata/", {

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
       <p style={{color: "green", margin: 20}}>Du bist eingeloggt</p>
       <form
           className="row g-1"
           style={{margin: 20}}
           onSubmit={handleAnmeldung}
           >

           <label htmlFor="formGroupExampleInput"><p className="fs-5">Anmeldung für Mittagsmenü</p></label>

           <div className="col-md-2">
               <label htmlFor="mitarbeiter" className="form-label">Person</label>
               <select className="form-select"
                       onChange={e => setFormData({...formData, person: e.target.value})} value={formData.person} required>
                   <option value=""> Bitte wählen</option>
                   {persons.map(person => (
                       <option key={person.PersNr}>
                           {person.NameVorname}
                       </option>
                   ))}
               </select>
           </div>

           <div className="mb-1"></div>

           <div className="col-md-2">
               <label>Datum:</label>
               <input onChange={e => setFormData({...formData, date: e.target.value})} value={formData.date} className="form-control" id="datum" type="date" name="datum" required/>
           </div>

           <div className="mb-1"></div>

           <div className="col-md-2">
               <label>Zeit:</label>
               <input className="form-control" onChange={(e) => setFormData({...formData, time: e.target.value})} value={formData.time} type="time" id="time" name="zeit" min="12:00" max="14:00" required/>
           </div>

           <div className="form-check" id="menuauswahl" style={{marginTop: 20}}>
               <input className="form-check-input" onChange={e => setFormData({...formData, menu: e.target.value})} value="vegi" type="radio" id="vegi" name="menu" required/>
               <label className="form-check-label" htmlFor="vegi">Vegi</label><br/>
               <input className="form-check-input" onChange={e => setFormData({...formData, menu: e.target.value})} value="fleisch" type="radio" id="fleisch" name="menu"  />
               <label className="form-check-label" htmlFor="fleisch">Fleisch</label><br/>
               <input className="form-check-input" onChange={e => setFormData({...formData, menu: e.target.value})} value="salat" type="radio" id="salat" name="menu"  />
               <label className="form-check-label" htmlFor="salat">Salat</label>
           </div>
           <div className="mb-3" style={{marginTop: 20}}>
               <input type="submit" value="Abschicken und ausloggen"/>
           </div>
           {errorMessage}
       </form>
   </>
)
}
export default Anmeldung;