import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 57 57"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M43.994 0H13.005A5.009 5.009 0 0 0 8 5v51a1 1 0 0 0 1 1h39a1 1 0 0 0 1-1V5c0-2.757-2.246-5-5.006-5zM10 5c0-1.654 1.348-3 3.005-3H34v53H10V5zm37 50H36V2h7.994A3.007 3.007 0 0 1 47 5v50z" />
    <path d="M27 19H15a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1zm-11 2h4v3h2v-3h4v7H16v-7zm0 11v-2h10v2H16zM29 15h2v26.083h-2zM39 15h2v26.083h-2z" />
  </svg>
);

export default SvgComponent;
