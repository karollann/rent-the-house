import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 15.25a6 6 0 0 1 6 6v15a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1v-15l.004-.225A6 6 0 0 1 24 15.25ZM15 29.25h4-4ZM24 11.25v4-4Z"
      stroke="#3C3C3C"
      strokeWidth={2}
    />
    <path
      d="M31 11.25h-7c-5.523 0-10 4.477-10 10v13M24 11.25l5-4-5 4Z"
      stroke="#3C3C3C"
      strokeWidth={2}
    />
    <path d="M24 13.25a2 2 0 1 0 .001-3.999A2 2 0 0 0 24 13.25Z" fill="#fff" />
    <path
      d="M24 13.25a2 2 0 1 0 .001-3.999A2 2 0 0 0 24 13.25Z"
      stroke="#3C3C3C"
      strokeWidth={2}
    />
  </svg>
);

export default SvgComponent;
