import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <h1 className={styles.logo}>
          Your Logo
          <span className={styles.tagline}>Here we go</span>
        </h1>
        <head className={styles.sectionHeading}>About Us</head>
        <span className={styles.text}>We want to spread awareness</span>
        <head className={styles.sectionHeading}>Contact Us</head>
        <span className={styles.text}>34567896</span>
        <span className={styles.text}>faisalharray@gmail.com</span>
      </div>

      <div className={styles.footerSection}>
        <head className={styles.sectionHeading}>Information</head>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Testimonials</li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <head className={styles.sectionHeading}>Helpful Links</head>
        <ul className={styles.list}>
          <li className={styles.listItem}>Services</li>
          <li className={styles.listItem}>Support</li>
          <li className={styles.listItem}>Privacy Policy</li>
          <li className={styles.listItem}>Terms & Conditions</li>
        </ul>
      </div>

      <div className={styles.footerSection}>
        <head className={styles.sectionHeading}>Subscribe for More Info</head>
        <div className={styles.subscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
