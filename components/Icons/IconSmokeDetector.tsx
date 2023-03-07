import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <style>
      {
        ".st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
      }
    </style>
    <circle className="st0" cx={16} cy={16} r={15} />
    <path
      d="M20.2 14.7c-.5.9-1.3 1.4-2.4 1.5-.6.1-1-.3-1-.8-.1-1.1-.1-2.2-.3-3.3-.2-1.2-.8-2.2-1.6-3.1 0 0-.1 0-.1.1-.5 1.3-1.4 2.4-2.2 3.6-1.1 1.4-1.6 3-1.6 4.8.1 2.4 2.4 4.6 5 4.5 2.4 0 4.5-1.7 4.9-3.9.3-1.2.1-2.7-.4-3.8-.1.2-.2.3-.3.4z"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
    />
    <path
      className="st0"
      d="M26.8 14C26 9.5 22.5 6 18 5.2M14 5.2C9.5 6 6 9.5 5.2 14M18 26.8c4.5-.8 8-4.3 8.8-8.8M5.2 18c.8 4.5 4.3 8 8.8 8.8"
    />
  </svg>
);

export default SvgComponent;
