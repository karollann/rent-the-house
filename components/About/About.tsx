import styles from "./about.module.scss";
import Image from "next/image";
import lake from "../../public/images_450px/lakeView_450px.jpg";
import livingroom from "../../public/images_450px/livingroom2_450px.jpg";
import { useTranslation } from "next-i18next";

export const About = () => {
  const { t } = useTranslation();

  console.log("werks");

  return (
    <div className={styles.about} id="about">
      <div className={styles.about__section}>
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
        <Image className={styles.about__image} src={lake} alt="" />
      </div>
      <div className={styles.about__section}>
        <Image className={styles.about__image} src={livingroom} alt="" />
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
