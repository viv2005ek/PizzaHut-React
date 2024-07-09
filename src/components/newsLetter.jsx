import styles from "./newsLetter.module.css"

function NewsLetter(){


    return <div className={styles.newsLetterCss}>
    
    <h1 className={styles.newsLetterCssH1}>News Letter</h1>
    <div>
    <p>Get recent news and updates.</p>
    <input className={styles.newsLetterCssInput} placeholder="Email Address" type="text" />
    <div className={styles.outerButton}>
        <button className={styles.innerButton}>Subscribe</button>
    </div>
    </div>
    
    
    </div>
}
export default NewsLetter