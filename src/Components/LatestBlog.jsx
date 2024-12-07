import styles from "./LatestBlog.module.css";

function LatestBlog() {
  return (
    <div className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Latest Blog</h1>
      </header>
      <section className={styles.imgsection}>
        <img className={styles.img} src="bgimage.jpg" alt="Blog Image" />
        <div className={styles.content}>
          <h1 className={styles.imgheading}>Heading</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor enim
            vero eos architecto quidem, fugit magnam error ullam voluptatem ipsa
            expedita, sit tenetur mollitia ad in reiciendis, blanditiis iste
            cumque.
          </p>
        </div>
      </section>
    </div>
  );
}

export default LatestBlog;
