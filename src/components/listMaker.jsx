import styles from "./listMaker.module.css"

// eslint-disable-next-line react/prop-types
function ListMaker({data}){

    return <div className={styles.listMakerCss}>
    <p><span style={{color:"#616161",position:"relative",top:"-2px"}} className="fw-bolder fs-5">{`>`}</span></p>
    <p className={styles.listItemP}>{` ${data}`}</p>
    
    
    </div>
}
export default ListMaker