import styles from "./about.module.scss";
import Image from "next/image";
import lake from "../../public/images_450px/lakeView_450px.jpg";
import livingroom from "../../public/images_450px/livingroom2_450px.jpg";
import { useTranslation } from "next-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.about} id="about">
      <div className={`${styles["about__section--first"]}`}>
        <div
          className={`${styles["about__container--left"]} ${styles.about__container}`}
        >
          <h2 className={styles.about__sectionHeading}>
            {t("about.headingUp")}
          </h2>
          <p className={styles.about__sectionText}>
            {t("about.descriptionUp")}
          </p>
        </div>
        <Image
          className={styles.about__image}
          src={lake}
          alt="Picture of the nearby lake"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className={`${styles["about__section--second"]}`}>
        <Image
          className={styles.about__image}
          src={livingroom}
          alt="Picture of the livingrom in the house"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <div
          className={`${styles["about__container--right"]} ${styles.about__container}`}
        >
          <h2 className={styles.about__sectionHeading}>
            {t("about.headingDown")}
          </h2>
          <p className={styles.about__sectionText}>
            {t("about.descriptionDown")}
          </p>
        </div>
      </div>
    </div>
  );
};
