import Card from "./Card";
import styles from "./RecentSection.module.css";
function RecentSection() {
  return (
    <div className={styles.recentSection}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Recent Blog Post</h1>
      </header>
      <div className={styles.card}>
        <Card title="phelaBlog" description="kuch be likh nhi sktai kya" />
        <Card title="phelaBlog" description="kuch be likh nhi sktai kya" />
        <Card title="phelaBlog" description="kuch be likh nhi sktai kya" />
        <Card title="phelaBlog" description="kuch be likh nhi sktai kya" />
      </div>
    </div>
  );
}

export default RecentSection;
