import styles from "./popular.module.css"
import PopularItem from "./popularItem"

function Popular(){

let datas=[{name:"Delecious Burger",discount:"-25%",actualPrice:"60.00$",newPrice:"45.00$",item:"1"},
    {name:"Grilled Veg",discount:"-7%",actualPrice:"42.00$",newPrice:"39.00$",item:"2"},
    {name:"Ruti With Veg",discount:"-10%",actualPrice:"29.00$",newPrice:"26.00$",item:"3"},
    {name:"Fast Food Combo",discount:"-18%",actualPrice:"34.00$",newPrice:"28.00$",item:"4"},
    {name:"Chicago Deep Pizza",discount:"-21%",actualPrice:"28.00$",newPrice:"22.00$",item:"5"},
    {name:"Chinese Pasta",discount:"-15%",actualPrice:"40.00$",newPrice:"34.00$",item:"6"},
    {name:"Whopper Burger King",discount:"-13%",actualPrice:"30.00$",newPrice:"26.00$",item:"7"},
    {name:"Ruti With Veg Slice",discount:"-7%",actualPrice:"30.525$",newPrice:"28.525$",item:"8"},
]


    return<div className={styles.popularCss}>

        <p className={styles.popularCssP}>crispy, every bite taste</p>
        <h1 className={styles.popularCssH1}>Popular Fast Foods</h1>
        <div className={styles.popularItems}>
           { datas.map((data)=>{
            return<>
        <PopularItem data={data}></PopularItem>
        </>
            })}
        </div>
        
    </div>
}

export default Popular