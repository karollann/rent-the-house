import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.96px}"
        }
      </style>
    </defs>
    <path
      className="cls-1"
      d="M1.21 23.79v-2.94A6.86 6.86 0 0 1 8.08 14H14a2 2 0 0 1 2 2 2 2 0 0 1-2 2h1l4.3-4.29a2.08 2.08 0 0 1 1.41-.71 2.08 2.08 0 0 1 2.08 2.08 2.08 2.08 0 0 1-.61 1.47l-4.12 4.13a4 4 0 0 1-2.78 1.15H11a2 2 0 0 0-2 2"
    />
    <circle className="cls-1" cx={6.14} cy={9.15} r={2.94} />
    <path
      className="cls-1"
      d="m20.84 5.19-1.96-3.4L8.69 7.68M17.45 7.15l-1.97-3.4"
    />
  </svg>
);

export default SvgComponent;
