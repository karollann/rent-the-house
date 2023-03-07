import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.148 6v52a3 3 0 0 0 3 3h43.704a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H10.148a3 3 0 0 0-3 3Zm47.704 50v2a1 1 0 0 1-1 1H10.148a1 1 0 0 1-1-1v-2h45.704ZM9.148 20v34h45.704V20H9.148ZM46.46 41H49a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2.54C44.707 26.661 38.894 22 32 22c-8.279 0-15 6.721-15 15s6.721 15 15 15c6.894 0 12.707-4.661 14.46-11Zm-2.088-8C42.684 27.78 37.78 24 32 24c-7.175 0-13 5.825-13 13s5.825 13 13 13c5.78 0 10.684-3.78 12.372-9h-3.139c-1.548 3.565-5.101 6.061-9.233 6.061-5.553 0-10.061-4.508-10.061-10.061S26.447 26.939 32 26.939c4.132 0 7.685 2.496 9.233 6.061h3.139Zm-5.33.076A8.063 8.063 0 0 0 32 28.939 8.065 8.065 0 0 0 23.939 37 8.065 8.065 0 0 0 32 45.061a8.063 8.063 0 0 0 7.042-4.137A4.004 4.004 0 0 1 35.822 37a4.004 4.004 0 0 1 3.22-3.924ZM48 35h-8.178c-1.103 0-2 .896-2 2s.897 2 2 2H48v-4Zm6.852-17H9.148V6a1 1 0 0 1 1-1h43.704a1 1 0 0 1 1 1v12ZM28 8a1 1 0 0 0-1-1H12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V8Zm21.5.5A3.501 3.501 0 0 0 46 12c0 1.932 1.568 3.5 3.5 3.5S53 13.932 53 12s-1.568-3.5-3.5-3.5Zm-9 0A3.501 3.501 0 0 0 37 12c0 1.932 1.568 3.5 3.5 3.5S44 13.932 44 12s-1.568-3.5-3.5-3.5ZM26 9v5H13V9h13Zm23.5 1.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 49.5 10.5Zm-9 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 40.5 10.5Z" />
  </svg>
);

export default SvgComponent;
