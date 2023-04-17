import { AmenityCard } from "../AmenityCard/AmenityCard";
import { amenityCardData } from "../../data";
import { primaryAmenityCardData } from "../../data";
import { AmenitiesModal } from "../AmenitiesModal/AmenitiesModal";
import { ReactElement, ReactNode, SVGProps, useState } from "react";
import { HighlightedAmenity } from "../HighlightedAmenity/HighlightedAmenity";
import { ShowMoreButton } from "../../components/ShowMoreButton/ShowMoreButton";
import { Slider } from "@/components/Carousel/Carousel";
import { useTranslation } from "next-i18next";

import style from "./amenities.module.scss";

type AmenitiesArr = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  translationKeyName: string;
  highlighted?: boolean;
  displayFirst?: boolean;
}[];

export const Amenities = () => {
  const { t } = useTranslation();

  const allAmenities: AmenitiesArr = Object.values(amenityCardData).flat();

  const primaryAmenities: AmenitiesArr = Object.values(
    primaryAmenityCardData
  ).flat();
  const highlightedAmenities: AmenitiesArr = allAmenities.filter(
    (amenity) => amenity.highlighted
  );

  const displayFirstAmenities: AmenitiesArr = allAmenities.filter(
    (amenity) => amenity.displayFirst
  );

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className={style.amenities} id="amenities">
      <h2 className={style.amenities__heading}>{t("amenities.heading")}</h2>
      <ul className={style.amenities__primaryAmenities}>
        {primaryAmenities.map((amenity) => (
          <AmenityCard
            containerStyle={style.amenityCard}
            headingStyle={style.amenityCard__name}
            icon={amenity.icon}
            name={t(amenity.translationKeyName)}
            key={amenity.translationKeyName}
          />
        ))}
      </ul>
      <div className={style.amenities__textContainer}>
        <p className={style.amenities__text}>
          {t("amenities.description.0")}
          <br />
          {t("amenities.description.1")}

          <br />
          {t("amenities.description.2")}

          <br />
          {t("amenities.description.3")}
        </p>
        <p className={style.amenities__text}>
          {t("amenities.description.4")}
          <br />
          {t("amenities.description.5")}
        </p>
      </div>
      <div className={style.amenities__highlitedAmenities}>
        {highlightedAmenities.map((amenity) => (
          <HighlightedAmenity
            icon={amenity.icon}
            name={t(amenity.translationKeyName)}
            key={amenity.translationKeyName}
          />
        ))}
      </div>
      <div className={style.amenities__roomsContainer}>
        <h2 className={style.amenities__roomsContainerHeading}>
          {t("amenities.heading_2")}
        </h2>
        <Slider />
      </div>
      <div className={style.amenities__displayFirst}>
        <h2 className={style.amenities__displayFirstHeading}>Amenities</h2>
        <ul className={style.amenities__displayFirstList}>
          {displayFirstAmenities.map((amenity) => (
            <AmenityCard
              containerStyle={style.amenityCard}
              headingStyle={style.amenityCard__name}
              icon={amenity.icon}
              name={t(amenity.translationKeyName)}
              key={amenity.translationKeyName}
            />
          ))}
        </ul>
        <ShowMoreButton
          open={() => setIsOpen(true)}
          numberOfItems={allAmenities.length}
          item="amenities"
        />
      </div>
      <AmenitiesModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};
