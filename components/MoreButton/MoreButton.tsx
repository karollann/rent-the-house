import styles from "./moreButton.module.scss";

type MoreButtonType = {
  onClick?: () => void;
  text: string;
  href?: string;
};

export const MoreButton = ({ onClick, text, href }: MoreButtonType) => {
  const As = href ? "a" : "button";

  return (
    <As
      href={href}
      className={styles.moreButton}
      onClick={onClick}
      target="_blank"
    >
      {text}
    </As>
  );
};
