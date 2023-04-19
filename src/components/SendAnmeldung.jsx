import React, {useState, useEffect, Component} from "react";

export default function SendAnmeldung() {

    const [form, setForm] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const raw = {key: "DqRestTest1", text: "Test: {{DqDataTs}} UUID: {{DqDataUuid}}"}
    async function sendAnmeldung() {

        try {
            const response = await fetch("https://4dtestapi.dataquest.ch/rest/v2/dqdata", {

                method: "POST",
                headers:
                    {
                        Authorization: `Bearer ${process.env.REACT_APP_API_AUTH_CREDENTIALS}`,
                        "Content-Type": "application/json"
                    },
                body: JSON.stringify(raw),

            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error(error);
            setErrorMessage("Unerwarteter Fehler beim Login-Versuch.");
        }

    }

    return(
            <>
            </>
        )
}