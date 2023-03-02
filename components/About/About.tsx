import styles from "./about.module.scss";
import Image from "next/image";
import lake from "../../public/Images/lake.jpeg";
import lodge from "../../public/Images/lodgeFront.jpeg";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__section}>
        <div className={styles.about__container}>
          <h2 className={styles.about__sectionHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nobis
            amet eveniet facere architecto est repudiandae magni dolorum
            repellat exercitationem tempora eligendi, ea vero esse expedita
            facilis corrupti delectus accusantium!
          </p>
        </div>
        <Image className={styles.about__image} src={lake} alt="" />
      </div>
      <div className={styles.about__section}>
        <Image className={styles.about__image} src={lodge} alt="" />
        <div className={styles.about__container}>
          <h2 className={styles.about__sectionHeading}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
          <ul className={styles.about__list}>
            <li className={styles.about__listElement}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className={styles.about__listElement}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className={styles.about__listElement}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li className={styles.about__listElement}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
