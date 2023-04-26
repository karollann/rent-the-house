import { MouseEvent, MouseEventHandler, useState } from "react";
import { useTranslation } from "next-i18next";

import { ContactFormModal } from "../ContactFormModal/ContactFormModal";
import styles from "./headerMobile.module.scss";
import { mobileHeaderMenuElementData } from "@/data";
import { MobileHeaderMenuElement } from "../MobileHeaderMenuElement";

export const HeaderMobile = () => {
  const { t } = useTranslation();
  const [contactFormModalIsOpen, setContactFormModalIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickToggleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);

    const html = document.querySelector("html");

    !isMenuOpen
      ? html?.classList.add("disable-scroll")
      : html?.classList.remove("disable-scroll");
  };

  const handleClick = (e: MouseEvent<HTMLUListElement>) => {
    handleClickToggleMenu(e);
  };

  const closeMenuAndOpenModal = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      setContactFormModalIsOpen(true);
    }, 750);
  };

  return (
    <header className={styles.header}>
      <nav
        aria-hidden={!isMenuOpen}
        role="navigation"
        className={isMenuOpen ? `${styles["nav--open"]}` : ""}
      >
        <ul
          className={
            !isMenuOpen
              ? `${styles.nav__menu} ${styles["nav__closed"]}`
              : styles.nav__menu
          }
          aria-label="main navigation"
          hidden={!isMenuOpen}
          aria-expanded={isMenuOpen}
          onClick={handleClick}
        >
          {mobileHeaderMenuElementData.map((element) => (
            <MobileHeaderMenuElement
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
        <button
          onClick={handleClickToggleMenu}
          className={styles.nav__toggle}
          aria-expanded="false"
          aria-controls="menu"
        >
          <svg
            className={styles.menuicon}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <title>Toggle Menu</title>
            <g>
              <line
                className={styles.menuicon__bar}
                x1="13"
                y1="16.5"
                x2="37"
                y2="16.5"
              />
              <line
                className={styles.menuicon__bar}
                x1="13"
                y1="24.5"
                x2="37"
                y2="24.5"
              />
              <line
                className={styles.menuicon__bar}
                x1="13"
                y1="24.5"
                x2="37"
                y2="24.5"
              />
              <line
                className={styles.menuicon__bar}
                x1="13"
                y1="32.5"
                x2="37"
                y2="32.5"
              />
              <circle
                className={styles.menuicon__circle}
                r="23"
                cx="25"
                cy="25"
              />
            </g>
          </svg>
        </button>
        <div className={styles.splash}></div>
      </nav>
      <ContactFormModal
        modalIsOpen={contactFormModalIsOpen}
        closeModal={() => setContactFormModalIsOpen(false)}
      />
    </header>
  );
};
