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
      d="M28 17.108a5.048 5.048 0 0 1-3.5 4.822V24c3.145-.692 5.5-3.515 5.5-6.892 0-3.896-3.134-7.054-7-7.054-.198 0-.395.008-.589.025C20.977 5.956 17.081 3 12.5 3 6.701 3 2 7.737 2 13.581c0 4.417 2.685 8.201 6.5 9.787v-2.214A8.586 8.586 0 0 1 4 13.581C4 8.827 7.82 5 12.5 5c3.623 0 6.731 2.294 7.95 5.537l.008-.004c.231.626.393 1.286.477 1.971.63-.29 1.33-.45 2.065-.45 2.747 0 5 2.248 5 5.054ZM23 18H13v2h10v-2Zm-2 4H11v2h10v-2Zm-8 4h10v2H13v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
