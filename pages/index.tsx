import Head from "next/head";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { isBrowser } from "../utils";
import { photos } from "@/data";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Amenities } from "@/components/Amenities/Amenities";
import { Reviews } from "@/components/Reviews/Reviews";
import { MeteoWidget } from "@/components/MeteoWidget/MeteoWidget";
import { DatePickerComponent } from "@/components/DatePicker/DatePickerComponent";
import { Gallery } from "@/components/Gallery/Gallery";
import { Footer } from "@/components/Footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeaderMobile } from "@/components/HeaderMobile/HeaderMobile";
import { LogoMobile } from "@/components/LogoMobile/LogoMobile";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["homePage"])),
    },
  };
}

const photoGroup = photos.slice(0, 9);

const Map = dynamic(
  () => import("../components/Map/Map").then((mod) => mod.Map),
  {
    ssr: false,
  }
);

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.09,
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header isAboutInView={inView} />
        <LogoMobile isAboutInView={inView} />
        <HeaderMobile />
        <main className="main">
          <Hero ref={ref} />
          <div className="belowHeroContainer">
            <div className="inMainContainer">
              <About />
              <Amenities />
              <Reviews />
              {isBrowser && <Map />}
            </div>
            <aside className="aside">
              <div className="inAside">
                <MeteoWidget />
                <DatePickerComponent />
              </div>
            </aside>
          </div>
          <Gallery photos={photoGroup} />
        </main>
        <Footer />
      </div>
    </>
  );
}
