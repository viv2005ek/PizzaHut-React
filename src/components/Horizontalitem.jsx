/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Horizontalitem.module.css"

const Horizontalitem=({data})=>{

    return <>
       <div className={styles.dropDown}>

<label htmlFor={`${data}_Horizontalitem`}>{`${data}`}</label>
<select id={`${data}_Horizontalitem`}>
<option value=""></option>
</select>
</div>
    </>
}
export default Horizontalitem