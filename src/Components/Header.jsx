import { NavLink } from "react-router-dom";
import styles from "../Components/Header.module.css";
import { useAuth } from "../contexts/Auth";
import Profile from "./Profile";
function Header() {
  const { isauthorised } = useAuth();
  return (
    <nav className={styles.nav}>
      <div>
        <h1 className={styles.logo}> logo</h1>
      </div>

      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/About">About</NavLink>
        {isauthorised && <NavLink to="/createblog">Create</NavLink>}
        {isauthorised ? (
          <Profile />
        ) : (
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default Header;
