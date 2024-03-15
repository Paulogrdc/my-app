import React from "react" 
import  style from "./BuscarAnime.module.css"

const BuscarAnimes = ({value, onChange}) => {
   function handleChange(event) {
      onChange(event.target.value)
   }
   return (
   <div className={style.input}>  
      <h1> Animes</h1>
      <input type= "search" value={value} onChange={handleChange} placeholder="seacrh" />
    </div>
   )

}


export default BuscarAnimes 