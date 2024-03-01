import style from "./Main.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Main() {
    return(
        <section className={style.main}>  
            <h1>Pesquise seus livros</h1>
            <form autocomplete="on">
                <div className={style.FontAwesomeIcon}>
                    <input type="text" name="name" id="txt" placeholder="search"/>
                    <FontAwesomeIcon icon={faSearch} className={style.searchIcon} />
                    </div>
            </form>
        </section>
    )
}


export default Main 