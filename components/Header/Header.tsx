import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>Homestead Lodge</p>
      <nav className={styles.header__nav}>
        <a href="#" className={styles.header__link}>
          About
        </a>
        <a href="#" className={styles.header__link}>
          Rates
        </a>
        <a href="#" className={styles.header__link}>
          Gallery
        </a>
        <a href="#" className={styles.header__link}>
          Reviews
        </a>
        <a href="#" className={styles.header__link}>
          Contact
        </a>
      </nav>
    </header>
  );
};
