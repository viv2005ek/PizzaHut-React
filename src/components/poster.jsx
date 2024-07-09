import PosterLeft from "./posterLeft"
import PosterRight from "./posterRight"
import styles from "./poster.module.css"
function Poster(){

    return <div className={styles.posterCss}>
    <PosterLeft></PosterLeft>
    <PosterRight></PosterRight>
    </div>
}
export default Poster