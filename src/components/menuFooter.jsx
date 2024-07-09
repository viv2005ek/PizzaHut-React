import styles from "./MenuFooter.module.css"
import ListMaker from "./listMaker"
function MenuFooter(){
let datas=["Steaks","Burgers","Coctails","Bar B Q","Desserts"]
    return<div className={styles.MenuFooter}>
    <h1>Menu</h1>
    <div>
    {datas.map((data)=>{
        return<>
        <ListMaker data={data}></ListMaker>
        </>
    })}
</div>
    </div>
}
export default MenuFooter