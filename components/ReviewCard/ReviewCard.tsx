import styles from "./reviewCard.module.scss";
import IconStar from "../../components/Icons/IconStar";

type ReviewCardProps = {
  guestName: string;
  month?: string;
  year: string;
  rating: number;
  reviewBody?: string;
};

export const ReviewCard = ({
  guestName,
  month,
  year,
  rating,
  reviewBody,
}: ReviewCardProps) => {
  return (
    <div className={styles.reviewCard}>
      <h3 className={styles.reviewCard__guestName}>{guestName}</h3>
      <h4 className={styles.reviewCard__date}>
        {month}
        {year}
      </h4>
      <div>
        {Array(5)
          .fill("")
          .map((star, i) => (
            <IconStar
              width={"16px"}
              height={"16px"}
              key={i}
              fill={i <= rating - 1 ? "	rgb(255, 215, 0)" : "rgb(80, 80, 80)"}
            />
          ))}
      </div>
      <p className={styles.reviewCard__review}>{reviewBody}</p>
    </div>
  );
};
