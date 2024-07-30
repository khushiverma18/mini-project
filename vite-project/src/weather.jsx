import Search from "./search";
import Info from "./info";
import { useState } from "react";
export default function Weather(){
    let[weather ,setweater]=useState({
        city:"delhi",
        Weather: "haze",
        feelslike: 37.73,
        humidity: 70,
        temp: 31.05,
        tempmax: 31.05,
        tempmin: 31.05, 
    })

    function update(newinfo){
        setweater(newinfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Weather App by Delta</h1>
       <Search updateinfo={update}/>
       <Info information={weather}/>
        </div>
    )
}