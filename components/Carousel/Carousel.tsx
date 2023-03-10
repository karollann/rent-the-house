import { carouselData } from "@/data";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import "react-multi-carousel/lib/styles.css";
import { useWindowSize } from "../../hooks/useWindowSize";

import carouselStyles from "./carouselContainer.module.scss";

const BREAKPOINTS: Record<string, number> = {
  desktop: 1300,
  tablet: 815,
};

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: BREAKPOINTS.desktop },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: BREAKPOINTS.desktop, min: BREAKPOINTS.tablet },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: BREAKPOINTS.tablet, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const getScreenSize = (
  width: number | undefined = 0
): "mobile" | "tablet" | "desktop" => {
  if (width >= BREAKPOINTS.desktop) {
    return "desktop";
  } else if (BREAKPOINTS.desktop > width && width >= BREAKPOINTS.tablet) {
    return "tablet";
  } else return "mobile";
};

export const Slider = () => {
  const width = useWindowSize().width;
  const screenSize = getScreenSize(width);

  return (
    <Carousel
      className={carouselStyles.carouselContainer}
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={false}
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={screenSize !== "mobile" ? 3000 : 2500}
      keyBoardControl={true}
      customTransition={
        screenSize !== "mobile"
          ? "transform 1000ms linear"
          : "transform 500ms linear"
      }
      containerClass="carouselContainer"
      removeArrowOnDeviceType={["mobile"]}
      deviceType={screenSize}
    >
      {carouselData.map((i) => {
        return (
          <CarouselCard
            key={i.description}
            photoImport={i.photoImport}
            bed={i.bed}
            description={i.description}
          />
        );
      })}
    </Carousel>
  );
};
