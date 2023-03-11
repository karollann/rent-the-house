import Image from "next/image";
import { forwardRef } from "react";
// import hero from "../../public/Images/hero.jpeg";

import style from "./hero.module.scss";

type HeroProps = {};

export const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  return (
    <div className={style.hero} ref={ref}>
      <h1 className={style.hero__title}>Perfect Place For Your Stay</h1>
      {/* <Image src={hero} alt="" className={style.hero__image} /> */}
    </div>
  );
});
