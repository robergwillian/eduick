import Ratings from "./ratings";
import styles from "./styles.module.scss";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

export default function CourseCard(props) {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src="card-image.png" alt="" />
      </div>
      <div className={styles.cardRatingWrapper}>
        <div className={styles.currentRating}>
          <Rating
            name=""
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
        </div>
        <div className={styles.lessonCount}>10 LESSONS</div>
      </div>
      <div className={styles.cardTitle}>{props.title}</div>
    </div>
  );
}
