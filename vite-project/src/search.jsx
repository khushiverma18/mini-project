import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Search({updateinfo}){
    let[city,setcity]=useState('');
    let[error,seterror]=useState(false);
    const URL='https://api.openweathermap.org/data/2.5/weather';
    const API='f06b2310a98a0a7e80f987a2422dad92'
    let weather=async()=>{
        try{
let res=await fetch(`${URL}?q=${city}&appid=${API}&units=metric`)
let resnew=await res.json()   
let result={
    city:city,
    temp: resnew.main.temp,
tempmax: resnew.main.temp_max,
tempmin: resnew.main.temp_min,
humidity:resnew.main.humidity,
feelslike:resnew.main.feels_like,
Weather:resnew.weather[0].description,
}
console.log(result)
return result;
        }catch(err){
         throw err;  
        }
}
    

    function handel (evt){
        setcity(evt.target.value)
    }

    let add=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city)
        setcity("")
      let newinfo= await weather();
       updateinfo(newinfo)
    }catch(err){
        seterror(true)
    }
}
    return (
        <div>
            <h2>Search for weather</h2>
            <form onSubmit={add}>
            <TextField id="outlined-basic" label="enter city" variant="outlined" value={city} onChange={handel} required />
            <br></br><br></br>
            <Button  type='submit' variant="contained">Search</Button>
           {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}