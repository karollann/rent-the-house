import Image from "next/image";
import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

// import hero from "../../public/Images/hero.jpeg";

import style from "./hero.module.scss";

type HeroProps = {};

export const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  const { t } = useTranslation();

  return (
    <div className={style.hero} ref={ref}>
      <h1 className={style.hero__title}>{t("hero.title")}</h1>
      {/* <Image src={hero} alt="" className={style.hero__image} /> */}
    </div>
  );
});
