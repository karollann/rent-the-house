import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 5V2h2v3h-2Zm5.634.974 1.5-2.598 1.732 1-1.5 2.598-1.732-1ZM16 23a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm11-10h3v2h-3v-2Zm.624-6.866-2.598 1.5 1 1.732 2.598-1.5-1-1.732ZM8.134 4.376l1.5 2.598 1.732-1-1.5-2.598-1.732 1Zm-2.16 6.99-2.598-1.5 1-1.732 2.598 1.5-1 1.732ZM15 27v3h2v-3h-2ZM5 15H2v2h3v-2Zm-1.624 7.134 2.598-1.5 1 1.732-2.598 1.5-1-1.732Zm6.258 2.892-1.5 2.598 1.732 1 1.5-2.598-1.732-1Zm12.5 3.598-1.5-2.598 1.732-1 1.5 2.598-1.732 1Zm2.892-6.258 2.598 1.5 1-1.732-2.598-1.5-1 1.732Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
