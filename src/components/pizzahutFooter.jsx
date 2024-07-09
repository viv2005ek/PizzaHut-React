import styles from "./pizzahutFooter.module.css"
function PizzahutFooter(){

    return <div className={ `${styles.pizzahutCss}  `}>
<h3 className={ `${styles.pizzahutCssH3} fw-bold fst-italic`}>pizza hut <br /> <span style={{fontSize:"10px",position:"relative",left:"12px"}}> FOOD & RESTAURANT</span></h3>
<p className={ `${styles.pizzahutCssP} fw-bold `}>Tuesday – Saturday: 12:00pm – 23:00pm  <br /> <span  style={{fontSize:"16px",position:"relative",top:"20px",textDecoration:"underline"}}>Closed on Sunday</span> </p>
<h4 className={ `${styles.pizzahutCssH4} fw-bold `}>5 star rated on TripAdvisor</h4>

    </div>
}

export default PizzahutFooter;