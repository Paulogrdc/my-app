import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Favoritos from "./Pages/Favoritos"
import Resultado from "./Pages/Resultado"

function Rotas() {
   return(
   
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Favoritos" element={<Favoritos/>}/>
                        <Route path="/Resultado" element={<Resultado/>}/>
                    </Routes>
            </BrowserRouter>
)
}


export default Rotas 