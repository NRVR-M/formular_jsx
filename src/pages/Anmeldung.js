import React, {useState, useEffect } from "react";

//Pages
import GetPers from "../components/GetPers";
import SendAnmeldung from "../components/SendAnmeldung";

function Anmeldung() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
       <>
           <div>
               <p style={{color: "green"}}>Du bist eingeloggt</p>
           </div>
           <br/>
           <form onSubmit={handleSubmit}>
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
                   | oder |
                   {/*<select>*/}
                   {/*    <option>Zeit</option>*/}
                   {/*    <option type="time" >12:00</option>*/}
                   {/*    <option type="time" >13:00</option>*/}
                   {/*    <option type="time" >14:00</option>*/}
                   {/*</select>*/}
               </div>
                <div>
                   <br/>
                   <input type="submit" value="Senden"/>
                </div>
           </form>
           <SendAnmeldung />
       </>
    )
}
export default Anmeldung;