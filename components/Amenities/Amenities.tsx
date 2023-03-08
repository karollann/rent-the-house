import { AmenityCard } from "../AmenityCard/AmenityCard";
import { amenityCardData } from "../../data";
import { primaryAmenityCardData } from "../../data";
import { AmenitiesModal } from "../AmenitiesModal/AmenitiesModal";
import { ReactElement, ReactNode, SVGProps, useState } from "react";
import { HighlightedAmenity } from "../HighlightedAmenity/HighlightedAmenity";
import { ShowMoreButton } from "../../components/ShowMoreButton/ShowMoreButton";

import style from "./amenities.module.scss";

type AmenitiesArr = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  name: string;
  highlighted?: boolean;
  displayFirst?: boolean;
}[];

export const Amenities = () => {
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
    <div className={style.amenities}>
      <h2 className={style.amenities__heading}>Welcome to Getaway Lodge!</h2>
      <ul className={style.amenities__primaryAmenities}>
        {primaryAmenities.map((amenity) => (
          <AmenityCard
            containerStyle={style.amenityCard}
            headingStyle={style.amenityCard__name}
            icon={amenity.icon}
            name={amenity.name}
            key={amenity.name}
          />
        ))}
      </ul>
      <div className={style.amenities__text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          dignissimos fuga et, a impedit facilis porro, officia vel suscipit
          quisquam quas perspiciatis sint nobis, aut laudantium ex. Nemo,
          tempore incidunt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui dignissimos est, tenetur reprehenderit harum tempora illo
          neque atque, aliquid rerum impedit iste alias perspiciatis perferendis
          pariatur natus assumenda. Illum, provident!Lorem
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          dignissimos fuga et, a impedit facilis porro, officia vel suscipit
          quisquam quas perspiciatis sint nobis, aut laudantium ex. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Atque amet molestias
          doloremque placeat voluptatum, commodi quod veritatis reiciendis totam
          ipsam esse? Saepe, esse dolore deserunt aliquid libero harum?
          Adipisci, nam? Nemo, tempore incidunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Qui dignissimos est, tenetur
          reprehenderit harum tempora illo neque atque, aliquid rerum impedit
          iste alias perspiciatis perferendis pariatur natus assumenda. Illum,
          provident!Lorem
        </p>
      </div>
      <div className={style.amenities__highlitedAmenities}>
        {highlightedAmenities.map((amenity) => (
          <HighlightedAmenity
            icon={amenity.icon}
            name={amenity.name}
            key={amenity.name}
          />
        ))}
      </div>
      <div className={style.amenities__roomsContainer}>
        <h3 className={style.amenities__roomsHeading}>Rooms</h3>
        <p>Carousel</p>
      </div>
      <div className={style.amenities__displayFirst}>
        <h3 className={style.amenities__displayFirstHeading}>Amenities</h3>
        <ul className={style.amenities__displayFirstList}>
          {displayFirstAmenities.map((amenity) => (
            <AmenityCard
              containerStyle={style.amenityCard}
              headingStyle={style.amenityCard__name}
              icon={amenity.icon}
              name={amenity.name}
              key={amenity.name}
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
