import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 53 53"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M50.5 0h-6a1 1 0 0 0-1 1h-30a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v48.506A3.5 3.5 0 0 0 5 53c.98 0 1.864-.407 2.5-1.056A3.491 3.491 0 0 0 10 53a3.5 3.5 0 0 0 3.5-3.494V46h30v3c0 2.206 1.794 4 4 4s4-1.794 4-4V1a1 1 0 0 0-1-1zm-37 7h30v32h-30V7zm30-4v2h-30V3h30zM5 51c-.827 0-1.5-.67-1.5-1.494V2h3v47.506C6.5 50.33 5.827 51 5 51zm6.5-1.494C11.5 50.33 10.827 51 10 51s-1.5-.67-1.5-1.494V2h3v47.506zm2-5.506v-3h30v3h-30zm36 5c0 1.103-.897 2-2 2s-2-.897-2-2V2h4v47z" />
    <path d="M16.5 15a.997.997 0 0 0 .707-.293l3-3a.999.999 0 1 0-1.414-1.414l-3 3A.999.999 0 0 0 16.5 15zM23.793 10.293l-8 8a.999.999 0 1 0 1.414 1.414l8-8a.999.999 0 1 0-1.414-1.414z" />
  </svg>
);

export default SvgComponent;
