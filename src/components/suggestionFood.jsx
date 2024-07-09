import SuggestionFoodHeading from "./SuggestionFoodHeading"
import SuggestionMenuData from "./suggestionMenuData"
import Poster from "./poster"
import styles from "./suggestionFood.module.css"



function SuggestionFood(){

    return <div className={styles.suggestionFoodCss}>
<SuggestionFoodHeading></SuggestionFoodHeading>
<SuggestionMenuData></SuggestionMenuData>
<Poster></Poster>
<p className={`${styles.para} fw-bolder`}>GLOBAL <span style={{color:"#FFC222"}}>5K+</span> HAPPY SPONSORS WITH US</p>
<div className={`${styles.icons}`}>
<i className="fa-solid fa-burger"></i>
<i className="fa-solid fa-pizza-slice"></i>
<i className="fa-solid fa-bowl-food"></i>
</div>
  <img className={styles.fruit4} src=  "./public/images/fruit4.png" alt="" />
  <img className={styles.fruit5} src="./public/images/fruit5.png" alt="" />
  <img className={styles.fruit6} src="./public/images/fruit6.png" alt="" />

    </div>
}
export default SuggestionFood   