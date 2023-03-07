import * as React from "react";

import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 53 53"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M27 29h3v2h-3z" />
    <path d="M45 51V1a.999.999 0 0 0-.071-.351c-.008-.02-.013-.04-.022-.06a1.01 1.01 0 0 0-.185-.274l-.049-.046c-.029-.026-.054-.056-.085-.079A.991.991 0 0 0 44.4.085l-.014-.008a.991.991 0 0 0-.349-.07C44.024.007 44.013 0 44 0H10a1 1 0 0 0-1 1v50H4v2h45v-2h-4zm-20-3.82V8.227l18-5.85V50.78l-18-3.6zM11 2h26.687L23.69 6.549A1 1 0 0 0 23 7.5V48a1 1 0 0 0 .804.98L33.901 51H11V2z" />
  </svg>
);

export default SvgComponent;
