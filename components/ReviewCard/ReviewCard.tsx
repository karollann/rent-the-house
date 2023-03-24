import styles from "./reviewCard.module.scss";
import { reviewDataType } from "@/data";
import IconStar from "../../components/Icons/IconStar";

export const ReviewCard = ({
  guestName,
  date,
  rating,
  reviewBody,
}: reviewDataType) => {
  return (
    <div className={styles.reviewCard}>
      <h3 className={styles.reviewCard__guestName}>{guestName}</h3>
      <h4 className={styles.reviewCard__date}>{date}</h4>
      <div>
        {Array(5)
          .fill("")
          .map((star, i) => (
            <IconStar
              width={"24px"}
              height={"24px"}
              key={i}
              fill={i <= rating - 1 ? "	rgb(255, 215, 0)" : "rgb(80, 80, 80)"}
            />
          ))}
      </div>
      <p className={styles.reviewCard__review}>{reviewBody}</p>
    </div>
  );
};
