/* eslint-disable no-unused-vars */
import Logo from "./Logo";
import NavItem from "./NavItem";
import NavButtons from "./NavButtons";
  import styles from "./NavBar.module.css";
const NavBar= ()=>{

    return <div className={styles.NavBarCss}>
    <Logo></Logo>
    <NavItem></NavItem>
    <NavButtons></NavButtons>
    
    </div>
}

export default NavBar;