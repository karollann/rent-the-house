import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 9a4.932 4.932 0 0 0 4-1.987 5.02 5.02 0 0 0 8 0A4.932 4.932 0 0 0 30 9V7a3.438 3.438 0 0 1-3.051-2.316A1.007 1.007 0 0 0 26 4a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 22 7a3.438 3.438 0 0 1-3.051-2.316A1.007 1.007 0 0 0 18 4a.971.971 0 0 0-.947.679A3.44 3.44 0 0 1 14 7h-1V6a4 4 0 0 0-8 0v11.262a7.013 7.013 0 1 0 8.873.738H14a4.932 4.932 0 0 0 4-1.987 5.02 5.02 0 0 0 8 0A4.932 4.932 0 0 0 30 18v-2a3.438 3.438 0 0 1-3.051-2.316A1.007 1.007 0 0 0 26 13a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 22 16a3.438 3.438 0 0 1-3.051-2.316A1.007 1.007 0 0 0 18 13a.971.971 0 0 0-.947.679A3.44 3.44 0 0 1 14 16h-1V9ZM7 6a2 2 0 0 1 4 0v6H7Zm2 22a4.997 4.997 0 0 1-2.499-9.325l.499-.29V14h4v4.386l.499.289A4.997 4.997 0 0 1 9 28Z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: "none",
      }}
      d="M0 0h32v32H0z"
    />
  </svg>
);

export default SvgComponent;
