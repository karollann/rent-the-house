import { useState } from "react";
import { useTranslation } from "next-i18next";

import { ContactFormModal } from "../ContactFormModal/ContactFormModal";
import styles from "./header.module.scss";

type HeaderPropsType = { isAboutInView: boolean };

export const Header = ({ isAboutInView }: HeaderPropsType) => {
  const { t } = useTranslation();
  const [contactFormModalIsOpen, setContactFormModalIsOpen] = useState(false);

  const classes = !isAboutInView
    ? `${styles.header} ${styles.header__headerSticky}`
    : `${styles.header}`;

  return (
    <header className={classes}>
      <p className={styles.header__title}>Getaway Lodge</p>
      <nav className={styles.header__nav}>
        <a href="#about" className={styles.header__link}>
          {t("header.about")}
        </a>
        <a href="#amenities" className={styles.header__link}>
          {t("header.amenities")}
        </a>
        <a href="#" className={styles.header__link}>
          {t("header.rates")}
        </a>
        <a href="#gallery" className={styles.header__link}>
          {t("header.gallery")}
        </a>
        <a href="#reviews" className={styles.header__link}>
          {t("header.reviews")}
        </a>
        <a href="#location" className={styles.header__link}>
          {t("header.location")}
        </a>
        <a
          onClick={() => setContactFormModalIsOpen(true)}
          className={styles.header__link}
        >
          {t("header.contact")}
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
