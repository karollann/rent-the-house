import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M47.262 12.352A1.004 1.004 0 0 0 46.5 12h-2V3.997A4 4 0 0 0 40.505 0H7.495A4 4 0 0 0 3.5 3.997V12h-2a1.004 1.004 0 0 0-.988 1.16l4.029 25.025C4.796 39.764 6.249 41 7.851 41H8.5v7h2v-2h28v2h2v-7c0-.012-.006-.021-.007-.033 1.459-.162 2.728-1.319 2.965-2.783l4.029-25.025a1 1 0 0 0-.225-.807zM7.495 2h33.01c1.101 0 1.995.895 1.995 1.997V7h-37V3.997C5.5 2.895 6.395 2 7.495 2zM5.5 9h37v3h-37V9zm13 5h11v2h-11v-2zm-8 30v-2h28v2h-28zm30.983-6.134c-.097.605-.72 1.134-1.334 1.134H7.851c-.613 0-1.236-.529-1.334-1.134L2.674 14H16.5v3a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-3h13.826l-3.843 23.866z" />
    <path d="M33.5 4h3v2h-3z" />
  </svg>
);

export default SvgComponent;
