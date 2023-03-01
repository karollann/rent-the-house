import styles from "./bookButton.module.scss";

type BookButtonProps = {
  buttonText: string;
  amount?: number;
  currency?: string;
};

export const BookButton = ({
  buttonText,
  amount,
  currency,
}: BookButtonProps) => {
  return (
    <a href="#" className={styles.bookButton}>
      <p className={styles.bookButton__text}>{buttonText}</p> {amount}{" "}
      {currency}
    </a>
  );
};
