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
        <li className={styles.header__item}>
          <a href="#about" className={styles.header__link}>
            {t("header.about")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#amenities" className={styles.header__link}>
            {t("header.amenities")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#" className={styles.header__link}>
            {t("header.rates")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#gallery" className={styles.header__link}>
            {t("header.gallery")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#reviews" className={styles.header__link}>
            {t("header.reviews")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a href="#location" className={styles.header__link}>
            {t("header.location")}
          </a>
        </li>
        <li className={styles.header__item}>
          <a
            onClick={() => setContactFormModalIsOpen(true)}
            className={styles.header__link}
          >
            {t("header.contact")}
          </a>
        </li>
        {/* <a href="#" className={styles.header__link}>
          <p className={styles.header__bookButtonText}>Book Now</p>
        </a> */}
      </nav>
      <ContactFormModal
        modalIsOpen={contactFormModalIsOpen}
        closeModal={() => setContactFormModalIsOpen(false)}
      />
    </header>
  );
};
