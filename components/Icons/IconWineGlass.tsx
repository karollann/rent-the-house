import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 203.896 203.896"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M146.943 3.202A7.498 7.498 0 0 0 140.797 0H63.1a7.5 7.5 0 0 0-6.146 3.201C44.212 21.42 35.978 45.564 35.978 64.713c0 17.498 6.98 33.313 19.654 44.532 10.482 9.279 24.257 14.933 39.342 16.268v63.384H76.919a7.5 7.5 0 0 0 0 15h51.107a7.5 7.5 0 0 0 0-15h-18.053v-63.494c14.671-1.5 28.053-7.095 38.29-16.158 12.674-11.219 19.654-27.034 19.654-44.532.001-19.148-8.232-43.293-20.974-61.511zm-44.994 107.623c-29.534 0-50.971-19.393-50.971-46.112 0-14.958 6.394-34.476 16.128-49.713h69.685c9.734 15.237 16.127 34.756 16.127 49.713 0 26.719-21.436 46.112-50.969 46.112z" />
  </svg>
);

export default SvgComponent;
