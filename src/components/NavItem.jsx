/* eslint-disable no-unused-vars */
import Horizontalitem from "./Horizontalitem";
import styles from "./NavItem.module.css"
const NavItem =()=>{


    let datas=["Home","About Us", "Shop","Blog","Pages", "Contact Us"];
    return <div className={styles.navItems}>
    
    {datas.map((data)=>{
return  <>
<Horizontalitem data={data}></Horizontalitem>
</>
    })}
    </div>
}
export default NavItem