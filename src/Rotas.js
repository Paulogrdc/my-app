import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Favoritos from "./Pages/Favoritos"


function Rotas() {
   return(
   
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Favoritos" element={<Favoritos/>}/>
                    </Routes>
            </BrowserRouter>
)
}


export default Rotas 