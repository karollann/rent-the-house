import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 22h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3ZM4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm5 13a1 1 0 0 0 1-1v-3h2a4 4 0 0 0 0-8H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm1-10h2a2 2 0 0 1 0 4h-2Z" />
  </svg>
);

export default SvgComponent;
