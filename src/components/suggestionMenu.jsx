/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./SuggestionMenu.module.css"


function SuggestionMenu({data}){
console.log(data);
    return<>
    <div className={`${styles.SuggestionMenuCss}`}>
        <img src={`./public/images/menuItem${data.item}.png`} alt="" style={data.name !== "Pro Pasta" ? { marginTop: '30px' } : {}} />

    
        <h3 style={data.name !== "Pro Pasta" ? { marginTop: '30px' } : {}} className="fw-bold">{data.name}</h3>
        <div className={`${styles.line}`}  ></div>
        <h5 className="fw-bolder"> {`${data.product} Product`}</h5>
    </div>
    </>
}
export default SuggestionMenu