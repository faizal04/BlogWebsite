import { useState } from "react";
import styles from "./Card.module.css";

function Card({ title, description, image }) {
  const [likes, setlikes] = useState(4);
  const [comment, setcomment] = useState(4);

  return (
    <div className={styles.card}>
      <img src="bgimage.jpg" alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.data}>
        <p>
          <img className="likelogo" src="like.png" alt="" /> {likes}
        </p>
        <p>
          <img className="commentlogo" src="comment.png" alt="" /> {comment}
        </p>
      </div>
    </div>
  );
}

export default Card;
