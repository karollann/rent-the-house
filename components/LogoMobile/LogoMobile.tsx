import styles from "./logoMobile.module.scss";

type HeaderPropsType = { isAboutInView: boolean };

export const LogoMobile = ({ isAboutInView }: HeaderPropsType) => {
  const classes = !isAboutInView
    ? `${styles.header} ${styles.header__headerSticky}`
    : `${styles.header}`;
  return (
    <div className={classes}>
      <p className={styles.header__title}>Getaway Lodge</p>
    </div>
  );
};
