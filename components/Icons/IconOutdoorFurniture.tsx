import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title />
    <path
      d="M85.08 47.56H74.25a1.5 1.5 0 0 0-1.5 1.5v4.46h-5.68l-5.83-12h8.92a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5H30.54a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h7.7l-5.2 12H28v-4.46a1.5 1.5 0 0 0-1.5-1.5H15.62a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h16.12l-4.32 9.92a1.51 1.51 0 0 0 .78 2 1.61 1.61 0 0 0 .6.12 1.49 1.49 0 0 0 1.37-.9L35 56.52h30.2l5.35 11a1.5 1.5 0 0 0 1.35.84 1.55 1.55 0 0 0 .66-.15 1.51 1.51 0 0 0 .69-2l-4.71-9.64h16.54a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.51Zm-1.5 6h-7.83v-3h7.83ZM32 35.61h36.66v3H32Zm9.44 6v-.08H58a1.27 1.27 0 0 0 .12.36l5.66 11.6H36.31ZM17.12 53.52v-3H25v3h-7.88Z"
      data-name="Calque 2"
    />
  </svg>
);

export default SvgComponent;
