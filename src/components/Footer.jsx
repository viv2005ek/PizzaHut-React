import PizzahutFooter from "./pizzahutFooter"
import About from "./about"
import MenuFooter from "./menuFooter"
import NewsLetter from "./newsLetter"
import SocialMedia from "./socialMedia"
import styles from "./Footer.module.css"

const Footer=()=>{

    return<div className={styles.outerFooterCss}>
     <div className={styles.FooterCss}>
<PizzahutFooter></PizzahutFooter>
<About></About>
<MenuFooter></MenuFooter>
<NewsLetter></NewsLetter>
    </div>
    <SocialMedia></SocialMedia>
    <img className={styles.img1} src="./public/images/footer1.png" alt="" />
    <img className={styles.img2} src="./public/images/footer2.png" alt="" />

    </div>
}

export default Footer