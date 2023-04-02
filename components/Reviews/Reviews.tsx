import { reviewsData } from "@/data";
import { MoreButton } from "../MoreButton/MoreButton";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import styles from "./reviews.module.scss";

export const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__headingContainer}>
        <h2 className={styles.reviews__heading}>Reviews</h2>
        <MoreButton
          href="https://www.airbnb.com/rooms/48524756/reviews?preview_for_ml=true&source_impression_id=p3_1677939185_b1%2FkbmzwKyMsMPq6"
          text="See more"
        />
      </div>
      <div className={styles.reviewsCards}>
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
