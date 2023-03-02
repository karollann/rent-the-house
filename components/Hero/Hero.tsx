import Image from "next/image";
import hero from "../../public/Images/hero.jpeg";

import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <h1 className={style.hero__title}>Perfect Place For Your Stay</h1>
      {/* <Image src={hero} alt="" className={style.hero__image} /> */}
    </div>
  );
};
