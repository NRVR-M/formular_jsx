import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/eingeloggt";
    

async function handleLogin(e) {
    e.preventDefault();

    const users = {username: (username), password: (password)};

    try {
        const response = await fetch("https://4dtestapi.dataquest.ch/rest/v2/authentication/login", {

            method: "POST",
            headers:
                {
                    Authorization: `Basic ${process.env.REACT_APP_API_AUTH_CREDENTIALS}`,
                    "Content-Type": "application/json"
                },
            body: JSON.stringify(users),

        });

        const data = await response.json();
        console.log(data);
        if (data && data.authToken) {
            // cf. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            localStorage.setItem("auth", data?.authToken);
            setErrorMessage("");
            navigate(from, {replace: true});
        } else {
            setErrorMessage("Fehler beim Login-Versuch: " + data.message);
        }
    } catch (error) {
        console.error(error);
        setErrorMessage("Unerwarteter Fehler beim Login-Versuch.");
    }
}

    //     const result = await response.json();
    //     console.log("Success:", result);
    // }
    // catch (error) {
    //     console.error("Error:", error);
    // }
    // }

    return (
        <form
            id="LoginForm"
            onSubmit={handleLogin}>
<br />
            <div>
                <label htmlFor="username">Benutzername:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                    }}
                    required />
            </div>
            <div>
                <br />
                <label htmlFor="password">Passwort:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    required />
            </div>
            <div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
};