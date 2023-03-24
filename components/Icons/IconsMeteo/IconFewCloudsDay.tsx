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
      d="M15 5V2h2v3h-2Zm7.862 16.824A5 5 0 0 1 19 30h-7.5a7.5 7.5 0 0 1-4.487-13.51A9 9 0 1 1 25 16a8.964 8.964 0 0 1-2.138 5.824Zm-1.554-1.26A4.978 4.978 0 0 0 19 20c-.846 0-1.642.21-2.34.58a5.487 5.487 0 0 1 .338 2.186A3 3 0 1 1 19 28h-7.5a5.5 5.5 0 1 1 5.156-7.418 4.969 4.969 0 0 1 1.923-.565 7.503 7.503 0 0 0-9.555-4.599 7 7 0 1 1 12.284 5.145ZM30 15h-3v2h3v-2Zm-4.974-5.366 2.598-1.5 1 1.732-2.598 1.5-1-1.732Zm-2.892-6.258-1.5 2.598 1.732 1 1.5-2.598-1.732-1Zm-12.5 3.598-1.5-2.598 1.732-1 1.5 2.598-1.732 1ZM3.376 9.866l2.598 1.5 1-1.732-2.598-1.5-1 1.732ZM2 15h3v2H2v-2Zm23.026 7.366 2.598 1.5 1-1.732-2.598-1.5-1 1.732Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
