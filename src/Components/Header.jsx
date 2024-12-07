import { NavLink } from "react-router-dom";
import styles from "../Components/Header.module.css";
function Header() {
  return (
    <nav className={styles.nav}>
      <div>
        <h1 className={styles.logo}> logo</h1>
      </div>

      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/login" className={styles.ctaLink}>
          Login
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
