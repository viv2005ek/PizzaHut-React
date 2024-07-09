import styles from "./SuggestionFoodHeading.module.css"
function SuggestionFoodHeading(){

    return <div className={styles.SuggestionFoodHeadingCss}>
    <div >
        <p className={`${styles.SuggestionFoodHeadingCssP} fw-bold`}>Crispy, Every Bite Taste</p>
        <h1 className={`${styles.SuggestionFoodHeadingCssH1} fw-bold`}>Popular Food Items</h1>
        </div>
        <div className={`${styles.arrows}`}>
        <i className= {`${styles.arrowLeft} bi bi-arrow-left text-warning`}></i>
        <i className= {`${styles.arrowRight} bi bi-arrow-right-circle-fill text-warning`} ></i>
        </div>
    </div>
}
export default SuggestionFoodHeading