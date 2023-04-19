import React, {useState, useEffect } from "react";

//Component


export default function GetPers() {

    const [persons, setPersons] = useState([]);



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

return(
    <>
        <div>
            <label>Auswahl: </label>
            <select name="personen" id="personen">
                <option>Bitte wählen</option>
                {persons.map(person => (
                    <option key={person.PersNr}>{person.NameVorname}</option>
                ))}
            </select>
        </div>
    </>
)

}

