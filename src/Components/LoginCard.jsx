import React, { useEffect, useState } from "react";
import styles from "./LoginCard.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login, isauthorised } = useAuth();
  const [user, setuser] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Signing up with", email, username, password);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      {!isauthorised && (
        <div>
          {user ? (
            <div className={styles.loginCard}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Welcome Back!</h2>
                <form onSubmit={handleLogin}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.loginButton}>
                    Login
                  </button>
                </form>
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={() => setuser(false)}
                    className={styles.switchLink}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className={styles.signupCard}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Create an Account</h2>
                <form onSubmit={handleSignup}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.signupButton}>
                    Sign Up
                  </button>
                </form>
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setuser(false)}
                    className={styles.switchLink}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginCard;
