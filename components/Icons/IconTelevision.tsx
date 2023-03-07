import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M43 27.5H1a1 1 0 0 0-1 1v15h2v-3h40v3h2v-15a1 1 0 0 0-1-1zm-41 2h19v9H2v-9zm21 9v-9h19v9H23z" />
    <path d="M30 33.5h6v2h-6zM8 33.5h6v2H8zM5 22.5h16v2h-4v2h10v-2h-4v-2h16a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1-20h32v18H6v-18z" />
  </svg>
);

export default SvgComponent;
