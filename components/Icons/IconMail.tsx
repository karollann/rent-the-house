import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.293 5.293A.997.997 0 0 1 4 5h16c.276 0 .526.112.707.293m-17.414 0A.997.997 0 0 0 3 6v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a.997.997 0 0 0-.293-.707m-17.414 0 7.293 7.293a2 2 0 0 0 2.828 0l7.293-7.293"
    />
  </svg>
);
export default SvgComponent;
