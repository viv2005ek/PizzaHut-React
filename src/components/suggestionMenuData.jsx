import SuggestionMenu from "./suggestionMenu"
import styles from "./suggestionMenuData.module.css"


function SuggestionMenuData(){

    let datas=[{"name":"Veg","product":"8","item":"1"},{"name":"Pro Burger","product":"3","item":"2"},{"name":"Pro Pasta","product":"3","item":"3"},{"name":"Pro Pizza","product":"3","item":"4"}]

    return <div className={styles.suggestionMenuDataCss}>

{datas.map((data)=>{
return  <>
<SuggestionMenu data={data}></SuggestionMenu>
</>
    })}


</div>
}
export default SuggestionMenuData   