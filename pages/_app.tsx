import "@/styles/globals.css";
import "../styles/_react-mutiple-carousel-override.scss";

import Modal from "react-modal";
import type { AppProps } from "next/app";

import { Montserrat } from "next/font/google";
import { useEffect } from "react";

const font = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
