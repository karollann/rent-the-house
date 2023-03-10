import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.35 12.79a.72.72 0 0 1-.49-.19 7.24 7.24 0 0 0-9.66 0 .751.751 0 0 1-1.06-.06.76.76 0 0 1 .07-1.06 8.7 8.7 0 0 1 11.64 0 .76.76 0 0 1 .07 1.06.792.792 0 0 1-.57.25Z"
      fill="#000"
    />
    <path
      d="M20 10a.76.76 0 0 1-.51-.2 10.87 10.87 0 0 0-15 0 .75.75 0 1 1-1-1.1 12.36 12.36 0 0 1 17 0A.75.75 0 0 1 20 10ZM9.38 15.64a.75.75 0 0 1-.6-.3.74.74 0 0 1 .15-1.05 5.06 5.06 0 0 1 6.15 0 .751.751 0 0 1 .15 1.05.76.76 0 0 1-1.05.15 3.59 3.59 0 0 0-4.35 0 .78.78 0 0 1-.45.15ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
