import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import styles from "./Profile.module.css";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    logout();
  }

  return (
    <div className={styles.user}>
      <span>Welcome,{user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Profile;
