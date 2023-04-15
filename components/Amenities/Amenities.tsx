import { AmenityCard } from "../AmenityCard/AmenityCard";
import { amenityCardData } from "../../data";
import { primaryAmenityCardData } from "../../data";
import { AmenitiesModal } from "../AmenitiesModal/AmenitiesModal";
import { ReactElement, ReactNode, SVGProps, useState } from "react";
import { HighlightedAmenity } from "../HighlightedAmenity/HighlightedAmenity";
import { ShowMoreButton } from "../../components/ShowMoreButton/ShowMoreButton";
import { Slider } from "@/components/Carousel/Carousel";

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
    <div className={style.amenities} id="amenities">
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
      <div className={style.amenities__textContainer}>
        <p className={style.amenities__text}>
          Dom posiada przestronny salon z kuchnią, kominkiem i dużym stołem
          jadalnym. Na parterze znajduje się również kącik wypoczynkowy z TV,
          kanapą i fotelami.
          <br />
          Dostępne są również dwa tarasy – jeden z nich zadaszony z widokiem na
          jezioro, drugi dobrze nasłoneczniony. W domu znajdują się dwie
          łazienki (prysznic i toaleta w obu) zlokalizowane na parterze oraz
          pietrze.
          <br />
          Cztery sypialnie usytuowane są na pierwszym piętrze – z dwóch z nich
          roztacza się widok na jezioro. Na terenie działki miejsce na
          samochody.
          <br />
          Dostępych jest wiele atrakcji na terenie działki i w okolicy: sporty
          wodne, wędkarstwo, boisko do badmintona, miejsce na ognisko.
        </p>
        <p className={style.amenities__text}>
          We wsi (1,6km) dostępna jest plaża z piaskowym i płytkim zejściem do
          wody oraz ogólnodostępne boiska do piłki nożnej, koszykówki i kort
          tenisowy.
          <br />
          Tereny Suwalszczyzny są świetnym miejscem do wycieczek rowerowych,
          spacerów czy biegania. Jesienią pobliskie lasy są rajem dla
          grzybiarzy. Doskonała baza wypadowa do wycieczek do Wigierskiego Parku
          Narodowego, słynnego wiaduktu kolejowego w Stańczykach, parku wodnego
          w Druskiennikach, Kowna czy Wilna.
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
        <h2 className={style.amenities__roomsContainerHeading}>
          Where you'll sleep
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
