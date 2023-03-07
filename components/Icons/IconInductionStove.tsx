import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm0 2h32c1.668 0 3 1.332 3 3v32c0 1.668-1.332 3-3 3H9c-1.668 0-3-1.332-3-3V9c0-1.668 1.332-3 3-3zm7.5 2c-1.75 0-3.19.692-4.123 1.742C11.444 10.792 11 12.152 11 13.5c0 1.347.444 2.708 1.377 3.758C13.31 18.308 14.75 19 16.5 19s3.19-.692 4.123-1.742C21.556 16.208 22 14.848 22 13.5c0-1.347-.444-2.708-1.377-3.758C19.69 8.692 18.25 8 16.5 8zM33 8c-3.854 0-7 3.146-7 7s3.146 7 7 7 7-3.146 7-7-3.146-7-7-7zm-16.5 2c1.25 0 2.06.433 2.627 1.07.567.638.873 1.527.873 2.43 0 .903-.306 1.792-.873 2.43C18.56 16.567 17.75 17 16.5 17c-1.25 0-2.06-.433-2.627-1.07-.567-.638-.873-1.527-.873-2.43 0-.903.306-1.792.873-2.43C14.44 10.433 15.25 10 16.5 10zM33 10c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zM17 23c-3.854 0-7 3.146-7 7s3.146 7 7 7 7-3.146 7-7-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zm16.5 1c-1.75 0-3.19.692-4.123 1.742C28.444 28.792 28 30.152 28 31.5c0 1.347.444 2.708 1.377 3.758C30.31 36.308 31.75 37 33.5 37s3.19-.692 4.123-1.742C38.556 34.208 39 32.848 39 31.5c0-1.347-.444-2.708-1.377-3.758C36.69 26.692 35.25 26 33.5 26zm0 2c1.25 0 2.06.433 2.627 1.07.567.638.873 1.527.873 2.43 0 .903-.306 1.792-.873 2.43C35.56 34.567 34.75 35 33.5 35c-1.25 0-2.06-.433-2.627-1.07-.567-.638-.873-1.527-.873-2.43 0-.903.306-1.792.873-2.43C31.44 28.433 32.25 28 33.5 28zm-17 11a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zm5 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

export default SvgComponent;
