import { useNavigate, useLocation } from "react-router-dom";


import {userid} from "../components/RequireAuth";
import React, {useState} from "react";

function Anmeldung() {

    // const [descr, setDescr] = useState()
    // const [price, setPrice] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()

    }
    const navigate = useNavigate();

    return(
       <>
           <div>
               <p style={{color: "green"}}>Du bist eingeloggt</p>
           </div>

           <form onSubmit={handleSubmit}>
               <p>Please select yout favourite Web language:</p>
               <input type="radio" id="html" name="fav_language" value="HTML" />
               <label htmlFor="html">HTML</label><br/>
               <input type="radio" id="css" name="fav_language" value="CSS" />
               <label htmlFor="html">CSS</label><br/>
               <input type="radio" id="js" name="fav_language" value="JavaScript" />
               <label htmlFor="html">JavaScript</label>
               <div>
                   <br/>
                   <input type="submit" value="Weiter" />
               </div>
           </form>
       </>
    )
}
export default Anmeldung;