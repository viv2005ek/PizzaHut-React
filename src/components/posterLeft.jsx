import styles from "./PosterLeft.module.css"

function PosterLeft(){

    return <div className={styles.posterLeftCss}>
    <div className={styles.left}>
        <p>CRISPY, EVERY BITE TASTE</p>
        <h2>SUPER <br />
        DELICIOUS</h2>
        <img src="./public/images/50off.png" alt="" />
    </div>
    <div className={styles.right}>
        <img className={styles.img1} src="./public/images/burgerText.png" alt="" />
        <img className={styles.img2}src="./public/images/burgerPlate.png" alt="" />
    </div>
    </div>
}
export default PosterLeft