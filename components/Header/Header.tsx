import { useState } from "react";
import { ContactFormModal } from "../ContactFormModal/ContactFormModal";
import styles from "./header.module.scss";

type HeaderPropsType = { isAboutInView: boolean };

export const Header = ({ isAboutInView }: HeaderPropsType) => {
  const [contactFormModalIsOpen, setContactFormModalIsOpen] = useState(false);

  const classes = !isAboutInView
    ? `${styles.header} ${styles.header__headerSticky}`
    : `${styles.header}`;

  return (
    <header className={classes}>
      <p className={styles.header__title}>Getaway Lodge</p>
      <nav className={styles.header__nav}>
        <a href="#" className={styles.header__link}>
          About
        </a>
        <a href="#" className={styles.header__link}>
          Amenities
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
          Location
        </a>
        <a
          onClick={() => setContactFormModalIsOpen(true)}
          className={styles.header__link}
        >
          Contact
        </a>
        <a href="#" className={styles.header__link}>
          <p className={styles.header__bookButtonText}>Book Now</p>
        </a>
      </nav>
      <ContactFormModal
        modalIsOpen={contactFormModalIsOpen}
        closeModal={() => setContactFormModalIsOpen(false)}
      />
    </header>
  );
};
