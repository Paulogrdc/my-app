import style from "./Header.module.css"

function Header() {
    return(
        <header className={style.header}>
            <h1> Paullibary</h1>
            <nav>
                <a>Home</a>
                <a>Favoritos</a>
            </nav>
        </header>
    ) 
}

export default Header