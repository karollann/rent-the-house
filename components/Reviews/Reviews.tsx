import { reviewsData } from "@/data";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import styles from "./reviews.module.scss";

export const Reviews = () => {
  return (
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsContainer__heading}>Reviews</h2>
      <div className={styles.reviewsCardsContainer}>
        {reviewsData.map((review) => (
          <a
            href="https://www.airbnb.com/rooms/48524756/reviews?preview_for_ml=true&source_impression_id=p3_1677939185_b1%2FkbmzwKyMsMPq6"
            target="_blank"
            rel="noopener noreferrer"
            key={review.reviewBody}
          >
            <ReviewCard
              guestName={review.guestName}
              rating={review.rating}
              date={review.date}
              reviewBody={review.reviewBody}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
