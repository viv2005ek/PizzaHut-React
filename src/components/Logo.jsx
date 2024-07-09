import styles from './Logo.module.css';

const Logo=()=>{

    return <div className={styles.logoContainer}>
    <img src="./public/images/logoR.png" alt="" style={{"height":"100px"}}/>
    <h3 className="fst-italic"  style={{"font-family":" Fugaz One,san-serif",
"font-size": "40px",
"font-weight": "800",
"color": "#EE3A43"
}}>PizzaHut</h3>
    
    </div>
}

export default Logo;