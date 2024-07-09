
import styles from "./MainAdRight.module.css"
function MainAdRight(){

    return <div className={styles.MainAdRightCss}>
    <img className={`${styles.img1} img-fluid`} src="./public/images/burgerComment.png" alt="" style={{"height":"100px"}}/>
    <img className={`${styles.img2} img-fluid`} src="./public/images/butgerimg.png" alt=""/>
    <img className={`${styles.img3} img-fluid`} src="./public/images/burgerText.png" alt=""/>
    </div>
}
export default MainAdRight