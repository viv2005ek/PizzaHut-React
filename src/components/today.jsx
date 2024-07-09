import styles from "./today.module.css"
import buttonStyles from "./Button.module.css"
function Today(){


    return <div className={styles.todayCss}>
        <div className={styles.todayText}>
    <p>save 20%</p>
    <h1>Today <span style={{color:"#FFC222"}}>Astackin</span> Day</h1>
    <h3> <span style={{color:"white"}}>Grilled</span> Veg <span style={{fontSize: "28px",fontWeight: "700",lineHeight: "46.8px",}}>$59,00</span></h3>
    <button className={`${buttonStyles.myButton} rounded`} style={{background: "#EE284B"}}><i className="bi bi-truck"></i> Order Now</button>
    </div>
    <img className={styles.fruit7} src="./public/images/fruit7.png" alt="" />
    <img className={styles.fruit8} src="./public/images/fruit8.png" alt="" />

    </div>
}
export default Today;