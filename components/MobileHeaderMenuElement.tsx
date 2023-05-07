import { MouseEvent } from "react";
import styles from "../components/HeaderMobile/headerMobile.module.scss";

type MobileHeaderMenuElementProps = {
  link: string;
  translation: string;
  id: string;
  closeMenu: () => void;
};

export const MobileHeaderMenuElement = ({
  link,
  translation,
  closeMenu,
  id,
}: MobileHeaderMenuElementProps) => {
  const scrolltoId = (id: string) => {
    const access = document.getElementById(id);
    access?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeAndScroll = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      scrolltoId(id);
    }, 500);
  };

  return (
    <li className={styles.nav__item}>
      <a href={link} className={styles.nav__link} onClick={closeAndScroll}>
        {translation}
      </a>
    </li>
  );
};
