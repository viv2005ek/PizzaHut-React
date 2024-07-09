import styles from "./about.module.css"
import ListMaker from "./listMaker"
function About(){
let datas=["Fredoka One","Special Dish","Reservation","Contact"]
    return<div className={styles.aboutCss}>
    <h1>About</h1>
    <div>
    {datas.map((data)=>{
        return<>
        <ListMaker data={data}></ListMaker>
        </>
    })}
</div>
    </div>
}
export default About