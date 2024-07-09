/* eslint-disable react/prop-types */
import styles from "./popularItem.module.css"
function PopularItem({data}){


    return<div className={styles.PopularItem}>
    <div className={styles.imgContainer}>    <img src={`./public/images/popular${data.item}.png`} alt="" />    </div>
    <div className={styles.priceContainer}>
        <p className={styles.discount}>{data.discount}</p>
        <p className={styles.actualPrice}>{data.actualPrice}</p>
        <p className={styles.newPrice}>{data.newPrice}</p>
    </div>
    <h1 className={`${styles.name} fw-bolder `}>{data.name}</h1>
    
    
    
    </div>
}
export default PopularItem