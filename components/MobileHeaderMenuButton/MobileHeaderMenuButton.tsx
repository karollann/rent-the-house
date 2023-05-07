import { MouseEvent } from "react";
import styles from "./mobileHeaderMenuButton.module.scss";

type MobileHeaderMenuButtonImports = {
  handleClickToggleMenu: (e: MouseEvent<HTMLElement>) => void;
  isMenuOpen: boolean;
};

export const MobileHeaderMenuButton = ({
  handleClickToggleMenu,
  isMenuOpen,
}: MobileHeaderMenuButtonImports) => {
  return (
    <button className={styles.btnMenu} onClick={handleClickToggleMenu}>
      <i
        className={` ${
          isMenuOpen
            ? `${styles.menuOpen} ${styles.btnMenu__bars}`
            : `${styles.btnMenu__bars}`
        }`}
      ></i>
    </button>
  );
};
