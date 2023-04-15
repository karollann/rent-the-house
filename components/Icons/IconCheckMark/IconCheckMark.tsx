import * as React from "react";
import { SVGProps } from "react";
import style from "./iconCheckMark.module.scss";

const SvgComponent = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={style.checkmark}
    viewBox="0 0 52 52"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      cx={26}
      cy={26}
      r={25}
      fill="none"
      className={style.checkmarkCircle}
    />
    <path
      fill="none"
      d="m14.1 27.2 7.1 7.2 16.7-16.8"
      className={style.checkmarkCheck}
    />
  </svg>
);
export default SvgComponent;
