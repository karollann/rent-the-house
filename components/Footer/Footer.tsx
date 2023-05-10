import { useState } from "react";
import IconAirbnb from "../Icons/IconAirbnb";
import IconMail from "../Icons/IconMail";
import IconCheckMark from "../Icons/IconCheckMark/IconCheckMark";
import style from "./footer.module.scss";
import { ContactFormModal } from "../ContactFormModal/ContactFormModal";
import { copyTextToClipboard } from "@/utils";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const [contactFormModalIsOpen, setContactFormModalIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopyClick = async () => {
    try {
      await copyTextToClipboard("gibylodge@gmail.com");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <h2 className={style.footer__heading}>Getaway Lodge</h2>
        <div className={style.footer__linkListContainer}>
          <ul className={style.footer__linksList}>
            <li className={style.footer__listElement}>
              <button onClick={() => setContactFormModalIsOpen(true)}>
                {t("footer.contact")}
              </button>
            </li>
            <li className={style.footer__listElement}>
              <a href="#about">{t("footer.about")}</a>
            </li>
            <li className={style.footer__listElement}>
              <a href="#amenities">{t("footer.amenities")}</a>
            </li>
            <li className={style.footer__listElement}>
              <a href="#reviews">{t("footer.reviews")}</a>
            </li>
            <li className={style.footer__listElement}>
              <a href="#location">{t("footer.location")}</a>
            </li>
          </ul>
        </div>
        <ul className={style.footer__iconsList}>
          <li className={style.footer__icon}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.airbnb.com/rooms/48524756?guests=1&adults=1&s=67&unique_share_id=c66c0325-92cd-4f66-bdae-87e4b7a2702f"
            >
              <IconAirbnb width={"24px"} height={"24px"} />
            </a>
          </li>
          <li
            className={style["footer__icon--right"]}
            onClick={handleCopyClick}
          >
            <div className={style.tooltip}>
              <div className={style.top}>
                {!isCopied ? (
                  <p className={style.tooltip__text}>{t("clickToCopyEmail")}</p>
                ) : (
                  <IconCheckMark width={"24px"} height={"24px"} />
                )}
                <span />
              </div>
              <IconMail width={"24px"} height={"24px"} />
            </div>
          </li>
        </ul>
        <ContactFormModal
          modalIsOpen={contactFormModalIsOpen}
          closeModal={() => setContactFormModalIsOpen(false)}
        />
      </div>
      <h3 className={style.footer__acknowledgment}>
        2023 Created by Karol Lann Vel Lace for learning purposes
      </h3>
    </footer>
  );
};
