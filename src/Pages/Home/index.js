import Footer from "../../Componetes/Footer";
import Header from "../../Componetes/Header";
import BuscarAnimes from "../../Componetes/BuscarAnimes"
import { useState, useEffect} from "react";
import style from "./Home.module.css"  
import React from 'react'

 
const api = "https://kitsu.io/api/edge" 

function Home() {
     const [info, setInfo] = useState('')
     const [text, setText] = useState('')

    useEffect(() => {
        if(text) {
            fetch(`${api}/anime?filter[text]=${text}&page[limit]=15`)
            .then((response)=> response.json())
            .then((response) =>{
                setInfo(response)
            } )
        }
    },[text]) 

    

    return (
        <>
            <Header/>
            <BuscarAnimes value={text} onChange={(search) => setText(search)}/>  
           

            {info.data && (
                <ul className={style.anime}> 
                     {info.data.map((anime) => (
                        <li key= {anime.id}>
                            <img src={anime.attributes.posterImage.small}/> 
                            {anime.attributes.canonicalTitle}
                        </li>
                     ))}
                </ul>
            )}

            <Footer />
        </>

    )
}


export default Home 