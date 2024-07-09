import styles from "./Button.module.css"
import stylesNav from "./NavButtons.module.css"

function NavButtons(){

    return <div className={stylesNav.NavButtonsCss}>
    <i className="bi bi-basket" style={{"fontSize":"30px","color":"green"}}></i>
    <button className={`${styles.myButton} fw-bold rounded`}>Contact Us</button>
    <i className="bi bi-upc" style={{"fontSize":"30px"}}></i>
    </div>
}

export default NavButtons;