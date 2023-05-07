import { MouseEvent, useState } from "react";
import { useTranslation } from "next-i18next";

import { ContactFormModal } from "../ContactFormModal/ContactFormModal";
import styles from "./headerMobile.module.scss";
import { mobileHeaderMenuElementData } from "@/data";
import { MobileHeaderMenuElement } from "../MobileHeaderMenuElement";
import { MobileHeaderMenuButton } from "../MobileHeaderMenuButton/MobileHeaderMenuButton";
// import { LogoMobile } from "../LogoMobile/LogoMobile";

type HeaderPropsType = { isAboutInView: boolean };

export const HeaderMobile = ({ isAboutInView }: HeaderPropsType) => {
  const { t } = useTranslation();
  const [contactFormModalIsOpen, setContactFormModalIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuRemoved, setIsMenuRemoved] = useState(true);

  const handleClickToggleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const html = document.querySelector("html");

    if (!isMenuOpen) {
      html?.classList.add("disable-scroll");
      setIsMenuRemoved(false);
    } else {
      html?.classList.remove("disable-scroll");
    }

    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenuAndOpenModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      setContactFormModalIsOpen(true);
    }, 750);
  };

  const classes = !isAboutInView
    ? `${styles.header} ${styles.header__headerSticky}`
    : `${styles.header}`;

  return (
    <header className={classes}>
      <p className={styles.header__title}>Getaway Lodge</p>

      <MobileHeaderMenuButton
        handleClickToggleMenu={handleClickToggleMenu}
        isMenuOpen={isMenuOpen}
      />

      <nav
        aria-hidden={!isMenuOpen}
        role="navigation"
        className={`${isMenuRemoved ? styles["nav--removed"] : ""} ${
          isMenuOpen ? styles["nav--open"] : styles["nav--closed"]
        }`}
        onAnimationEnd={(e) => {
          if (e.animationName.includes("scaleOut")) {
            setIsMenuRemoved(true);
          }
        }}
      >
        <ul
          className={styles.nav__menu}
          aria-label="main navigation"
          hidden={!isMenuOpen}
          aria-expanded={isMenuOpen}
          onClick={handleClickToggleMenu}
        >
          {mobileHeaderMenuElementData.map((element) => (
            <MobileHeaderMenuElement
              key={element.id}
              closeMenu={() => setContactFormModalIsOpen(false)}
              link={element.link}
              id={element.id}
              translation={t(element.translationKey)}
            />
          ))}
          <li className={styles.nav__item}>
            <a onClick={closeMenuAndOpenModal} className={styles.nav__link}>
              {t("header.contact")}
            </a>
          </li>
        </ul>
        <div className={styles.splash}></div>
      </nav>
      <ContactFormModal
        modalIsOpen={contactFormModalIsOpen}
        closeModal={() => setContactFormModalIsOpen(false)}
      />
    </header>
  );
};
