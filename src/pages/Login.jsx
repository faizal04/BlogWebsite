import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LoginCard from "../Components/LoginCard";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.login}>
      <Header />
      <LoginCard />
      <Footer />
    </div>
  );
}

export default Login;
