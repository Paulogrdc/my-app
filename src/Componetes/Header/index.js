import style from "./Header.module.css"
import {Link} from "react-router-dom"
function Header() {
    return(
        <header className={style.header}>
            <Link to="/" className={style.Link}> <h1>Animes</h1> </Link> 
            <nav> 
                <Link to="/" className={style.Link} >Home</Link>
                <Link to="/Favoritos" className={style.Link}>Favoritos</Link>
            </nav>
        </header>
    ) 
}
export default Header