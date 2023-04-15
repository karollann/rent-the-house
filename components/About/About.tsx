import styles from "./about.module.scss";
import Image from "next/image";
import lake from "../../public/images_450px/lakeView_450px.jpg";
import livingroom from "../../public/images_450px/livingroom2_450px.jpg";

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__section}>
        <div
          className={`${styles["about__container--left"]} ${styles.about__container}`}
        >
          <h2 className={styles.about__sectionHeading}>
            Ideal for active recreation
          </h2>
          <p className={styles.about__sectionText}>
            Drewniany dom nad jeziorem Gieret na skraju Puszczy Augustowskiej.
            Zapewnia miejsce do spokojnego odpoczynku jak i aktywnego spędzenia
            czasu. Dom położony na dużej działce, posiada taras z widokiem na
            jezioro. Chłodne wieczory uprzyjemni relaks przed kominkiem lub
            pieczenie kiełbasek nad ogniskiem.
          </p>
        </div>
        <Image className={styles.about__image} src={lake} alt="" />
      </div>
      <div className={styles.about__section}>
        <Image className={styles.about__image} src={livingroom} alt="" />
        <div
          className={`${styles["about__container--right"]} ${styles.about__container}`}
        >
          <h2 className={styles.about__sectionHeading}>...and relaxation</h2>
          <p className={styles.about__sectionText}>
            Idealne miejsce dla osób, które chciałby przenieść pracę zdalną
            bliżej natury – w domu i na części działki działa wi-fi. We wsi
            (1,6km) dostępna jest plaża z piaskowym i płytkim zejściem do wody.
          </p>
        </div>
      </div>
    </div>
  );
};
