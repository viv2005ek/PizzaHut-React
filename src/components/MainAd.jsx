import MainAdLeft from "./MainAdLeft";
import MainAdRight from "./MainAdRight";
import styles from "./MainAd.module.css";
import fruitStyles from "./MainAdFruit.module.css"

function MainAd(){

    return <div className={styles.MainAdCss}>
    <MainAdLeft></MainAdLeft>
    <MainAdRight></MainAdRight>
    <img className={fruitStyles.fruit1} src="./public/images/fruit1.png" alt="" />
    <img className={fruitStyles.fruit2} src="./public/images/fruit2.png" alt="" />
    <img className={fruitStyles.fruit3} src="./public/images/fruit3.png" alt="" />

    </div>
}

export default MainAd;