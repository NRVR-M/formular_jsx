import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

async function handleLogin(e) {
    e.preventDefault();

    const users = { username: (username), password: (password)};
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

        const result = await response.json();
        console.log("Success:", result);
    }
    catch (error) {
        console.error("Error:", error);
    }
}

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