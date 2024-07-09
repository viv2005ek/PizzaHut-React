import styles from "./MainAdLeft.module.css"
import buttonStyle from "./Button.module.css"


function MainAdLeft(){

    return <div className={styles.MainAdLeftCss}>
    <p  className= {`fw-bold ${styles.MainAdP}`}>crispy, every bite taste</p>
<h1 className= {`fw-bold ${styles.MainAdH1}`}>Hot Spicy Veg Burger</h1>
    <h3 className= {`${styles.MainAdH3}`}>Limited Offer / <span style={{"fontSize":"55px"}}>$5</span></h3>
    <button className={`${buttonStyle.myButton} fw-bold rounded`} style={{"backgroundColor":"#EE284B","marginTop":"20px"}}> <i className="bi bi-truck fs-3"></i> Order Now</button>
    </div>
}
export default MainAdLeft