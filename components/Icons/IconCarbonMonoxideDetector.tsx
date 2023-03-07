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
    <path d="M30 14.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#3C3C3C" />
    <path
      d="M23 8.75c7.732 0 14 6.268 14 14s-6.268 14-14 14-14-6.268-14-14 6.268-14 14-14Z"
      stroke="#3C3C3C"
      strokeWidth={2}
    />
    <path
      d="M27.889 23.75A4.998 4.998 0 0 1 24 27.644v2.028c.089-.013.178-.021.266-.037a7.01 7.01 0 0 0 5.635-5.706c.01-.059.007-.12.015-.179h-2.027ZM29.904 21.581a6.993 6.993 0 0 0-5.757-5.738c-.048-.008-.099-.004-.147-.011v2.029a4.976 4.976 0 0 1 3.89 3.889h2.028c-.008-.056-.005-.114-.014-.169ZM22 27.639a4.98 4.98 0 0 1-3.89-3.889h-2.024c.009.065.006.132.017.197a6.996 6.996 0 0 0 5.743 5.708c.05.008.103.006.154.013v-2.029ZM18.113 21.75A4.985 4.985 0 0 1 22 17.856V15.84c-.092.013-.189.01-.28.027a7 7 0 0 0-5.638 5.806c-.004.025-.002.051-.006.077h2.037Z"
      fill="#3C3C3C"
    />
    <path
      d="M23 20.75a2 2 0 1 1 .001 3.999A2 2 0 0 1 23 20.75Z"
      stroke="#3C3C3C"
      strokeWidth={2}
    />
  </svg>
);

export default SvgComponent;
