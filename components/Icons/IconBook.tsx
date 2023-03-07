import * as React from "react";

import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58 58"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M37.994 0H20.006C17.246 0 15 2.24 15 4.993V55a1 1 0 0 0 1 1h2v2h2v-2h18v2h2v-2h2a1 1 0 0 0 1-1V4.993C43 2.24 40.754 0 37.994 0zM20.006 2h17.988A3.003 3.003 0 0 1 41 4.993V11H23V6h-2v5h-4V4.993A3.003 3.003 0 0 1 20.006 2zM23 36v7h-1v-7h-2v7h-3v-9h24v9H25v-7h-2zm16-4v-5h-2v5h-1v-5h-2v5h-9v-5h-2v5h-1v-7h-2v7h-3v-9h24v9h-2zm-4.971-11-2.393-7.263-1.899.626L31.924 21H26v-7h-2v7h-7v-8h24v8h-6.971zM40 54H17v-9h24v9h-1z" />
    <path d="M35 46h2v7h-2z" />
  </svg>
);

export default SvgComponent;
