import style from "./Header.module.css"
import {Link} from "react-router-dom"
function Header() {
    return(
        <header className={style.header}>
             <h1 className={style.Link}> Animes</h1>
            <nav> 
                <Link to="/" className={style.Link} >Home</Link>
                <Link to="/Favoritos" className={style.Link}>Favoritos</Link>
            </nav>
        </header>
    ) 
}
export default Header