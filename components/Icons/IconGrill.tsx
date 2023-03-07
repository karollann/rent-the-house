import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M27.5 13H27c0-5.034-3.386-7.214-8.002-7.814H19V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.186h.002C8.386 5.786 5 7.966 5 13h-.5a.5.5 0 0 0 0 1H5c0 3.981 2.122 7.458 5.29 9.389l-2.552 5.955a.5.5 0 1 0 .918.393L9.401 28h13.198l.745 1.737a.499.499 0 1 0 .919-.393l-2.552-5.955C24.878 21.458 27 17.981 27 14h.5a.5.5 0 0 0 0-1zM14 5.08V4h4v1.08a25.035 25.035 0 0 0-4 0zM22.17 27H9.83l1.341-3.128C12.63 24.587 14.265 25 16 25s3.37-.413 4.83-1.128L22.17 27zM16 24c-5.514 0-10-4.486-10-10h20c0 5.514-4.486 10-10 10zM6 13c0-7 7.527-7 10-7s10 0 10 7H6z"
      style={{
        fill: "#0b1719",
      }}
    />
  </svg>
);

export default SvgComponent;
