import Image from "next/image";
import { carouselDataType } from "@/data";

import styles from "./carouselCard.module.scss";

export const CarouselCard = ({
  photoImport,
  description,
  bed,
}: carouselDataType) => {
  return (
    <a href="#" className={styles.carouselCard__imgContainer}>
      <Image
        priority={true}
        src={photoImport}
        alt={description}
        className={styles.carouselCard__img}
        sizes="(max-width: 800px) 45vw,
        (max-width: 1200px) 30vw,
        30vw"
      />
      <h2 className={styles.carouselCard__imgTitle}>{description}</h2>
      <h3 className={styles.carouselCard__imgDescription}>{bed}</h3>
    </a>
  );
};
