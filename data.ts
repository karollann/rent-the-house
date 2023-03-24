import IconDishwasher from "./components/Icons/IconDishwasher";
import IconInductionStove from "./components/Icons/IconInductionStove";
import IconKettle from "./components/Icons/IconKettle";
import IconCoffeeMaker from "./components/Icons/IconCoffeeMaker";
import IconCoffeeBean from "./components/Icons/IconCoffeeBean";
import IconWineGlass from "./components/Icons/IconWineGlass";
import IconFridge from "./components/Icons/IconFridge";
import IconKitchenBasics from "./components/Icons/IconKitchenBasics";
import IconHairDryer from "./components/Icons/IconHairDryer";
import IconCleaningProducts from "./components/Icons/IconCleaningProducts";
import IconHotWater from "./components/Icons/IconHotWater";
import IconBedLinens from "./components/Icons/IconBedLinens";
import IconWindowShades from "./components/Icons/IconWindowShades";
import IconDryingRack from "./components/Icons/IconDryingRack";
import IconBalcony from "./components/Icons/IconBalcony";
import IconLake from "./components/Icons/IconLake";
import IconBackyard from "./components/Icons/IconBackyard";
import IconOutdoorFurniture from "./components/Icons/IconOutdoorFurniture";
import IconHammock from "./components/Icons/IconHammock";
import IconGrill from "./components/Icons/IconGrill";
import IconBike from "./components/Icons/IconBike";
import IconBook from "./components/Icons/IconBook";
import IconTelevision from "./components/Icons/IconTelevision";
import IconFireplace from "./components/Icons/IconFireplace";
import IconRadiator from "./components/Icons/IconRadiator";
import IconSmokeDetector from "./components/Icons/IconSmokeDetector";
import IconCarbonMonoxideDetector from "./components/Icons/IconCarbonMonoxideDetector";
import IconFireExtinguisher from "./components/Icons/IconFireExtinguisher";
import IconPet from "./components/Icons/IconPet";
import IconHostGreets from "./components/Icons/IconHostGreets";
import IconParking from "./components/Icons/IconParking";
import IconWashingMachine from "./components/Icons/IconWashingMachine";
import IconPeople from "./components/Icons/IconPeople";
import IconBedroom from "./components/Icons/IconBedroom";
import IconBathroom from "./components/Icons/IconBathroom";
import IconWiFi from "./components/Icons/IconWiFi";
import IconFirePit from "./components/Icons/IconFirePit";

import IconClearSkyDay from "./components/Icons/IconsMeteo/IconClearSkyDay";
import IconClearSkyNight from "./components/Icons/IconsMeteo/IconClearSkyNight";
import IconFewCloudsDay from "./components/Icons/IconsMeteo/IconFewCloudsDay";
import IconFewCloudsNight from "./components/Icons/IconsMeteo/IconFewCloudsNight";
import IconScatteredCloudsDay from "./components/Icons/IconsMeteo/IconScatteredCloudsDay";
import IconScatteredCloudsNight from "./components/Icons/IconsMeteo/IconScatteredCloudsNight";
import IconClouds from "./components/Icons/IconsMeteo/IconClouds";
import IconMist from "./components/Icons/IconsMeteo/IconMist";
import IconShowerDay from "./components/Icons/IconsMeteo/IconShowerDay";
import IconShowerNight from "./components/Icons/IconsMeteo/IconShowerNight";
import IconRainDay from "./components/Icons/IconsMeteo/IconRainDay";
import IconRainNight from "./components/Icons/IconsMeteo/IconRainNight";
import IconThunderstorm from "./components/Icons/IconsMeteo/IconThunderstorm";

import Bedroom1 from "./public/BedroomsPhotos/Bedroom1.jpg";
import Bedroom2 from "./public/BedroomsPhotos/Bedroom2.jpg";
import Bedroom3 from "./public/BedroomsPhotos/Bedroom3.jpg";
import Bedroom4 from "./public/BedroomsPhotos/Bedroom4.jpg";

import { ReactElement, SVGProps } from "react";
import { StaticImageData } from "next/image";

export type Amenity = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  name: string;
  displayFirst?: boolean;
  highlighted?: boolean;
};

type AmenityKind =
  | "kitchen"
  | "bathroom"
  | "bedroom"
  | "views"
  | "outdoor"
  | "entertainment"
  | "heating"
  | "safety"
  | "services"
  | "notIncluded";

type Amenities = Record<AmenityKind, Amenity[]>;

export const amenityCardData: Amenities = {
  kitchen: [
    { icon: IconDishwasher, name: "Dishwasher", displayFirst: true },
    { icon: IconInductionStove, name: "Induction stove" },
    { icon: IconKettle, name: "Kettle" },
    {
      icon: IconCoffeeMaker,
      name: "Coffee maker: pour-over coffee",
      displayFirst: true,
    },
    { icon: IconCoffeeBean, name: "Coffee" },
    { icon: IconWineGlass, name: "Wine glasses" },
    { icon: IconFridge, name: "Refrigerator and freezer" },
    { icon: IconKitchenBasics, name: "Cooking basics" },
  ],
  bathroom: [
    { icon: IconHairDryer, name: "Hair dryer" },
    { icon: IconCleaningProducts, name: "Cleaning products" },
    { icon: IconHotWater, name: "Hot water" },
  ],
  bedroom: [
    { icon: IconBedLinens, name: "Bed linens" },
    {
      icon: IconWindowShades,
      name: "Room-darkening shades",
      displayFirst: true,
    },
    { icon: IconDryingRack, name: "Drying rack for clothing" },
  ],
  views: [
    {
      icon: IconLake,
      name: "Lake view",
      displayFirst: true,
    },
    {
      icon: IconBackyard,
      name: "Garden view",
    },
  ],
  outdoor: [
    {
      icon: IconBalcony,
      name: "Private patio",
    },
    {
      icon: IconBackyard,
      name: "Private backyard – Fully fenced",
      highlighted: true,
    },
    {
      icon: IconOutdoorFurniture,
      name: "Outdoor furniture",
      displayFirst: true,
    },
    { icon: IconHammock, name: "Hammock" },
    { icon: IconGrill, name: "BBQ grill", displayFirst: true },
    { icon: IconBike, name: "Bikes", displayFirst: true },
  ],
  entertainment: [
    { icon: IconBook, name: "Books and reading material" },
    { icon: IconTelevision, name: "43 HDTV with HDMI cable" },
    { icon: IconWiFi, name: "WiFi", highlighted: true },
    { icon: IconFirePit, name: "Fire pit", displayFirst: true },
  ],
  heating: [
    {
      icon: IconFireplace,
      name: "Indoor fireplace: wood-burning",
      displayFirst: true,
    },
    { icon: IconRadiator, name: "Electric radiators" },
  ],
  safety: [
    { icon: IconSmokeDetector, name: "Smoke alarm" },
    { icon: IconCarbonMonoxideDetector, name: "Carbon monoxide alarm" },
    { icon: IconFireExtinguisher, name: "Fire extinguisher" },
  ],
  services: [
    { icon: IconPet, name: "Pets allowed", highlighted: true },
    { icon: IconHostGreets, name: "Host greets you", displayFirst: true },
    {
      icon: IconParking,
      name: "Free parking on premises",
      highlighted: true,
    },
  ],
  notIncluded: [{ icon: IconWashingMachine, name: "Washing machine" }],
};

export const primaryAmenityCardData = [
  { icon: IconPeople, name: "8 Guests" },
  { icon: IconBedroom, name: "4 Bedrooms" },
  { icon: IconBedLinens, name: "5 Beds" },
  { icon: IconBathroom, name: "2 Bathrooms" },
];

export type carouselDataType = {
  photoImport: StaticImageData;
  description: string;
  bed: string;
};

export const carouselData: carouselDataType[] = [
  {
    photoImport: Bedroom1,
    description: "Bedroom 1",
    bed: "1 double bed, 1 single bed",
  },
  { photoImport: Bedroom2, description: "Bedroom 2", bed: "1 double bed" },
  { photoImport: Bedroom3, description: "Bedroom 3", bed: "1 double bed" },
  { photoImport: Bedroom4, description: "Bedroom 4", bed: "1 queen bed" },
];

export type reviewDataType = {
  guestName: string;
  date: string;
  rating: number;
  reviewBody: string;
};

export const reviewsData: reviewDataType[] = [
  {
    guestName: "Adam",
    date: "July 2022",
    rating: 5,
    reviewBody:
      "Great place and experience! We were a group of 6adults and 2 infants. We could easily fit another pair of adults. The estate has almost all the amenities you could think of (apart of washing machine), with beautiful, big garden. One watch-out - the access to lake is approx 200m away. Staying there is like living at your best friend’s place; the hosts are super friendly and welcoming.",
  },
  {
    guestName: "Bartosz",
    date: "August 2022",
    rating: 5,
    reviewBody:
      "Przestronny dom, bardzo dobrze wyposażony. Dla dwóch rodzin z w sumie 5 małych dzieci w sam raz. Duża działka wokół domu - duży atut przy rozbrykanych małolatach. W domu było wszystko, co potrzebne by miło spędzić czas. Bardzo dobra lokalizacja, z bliskim dostępem do jeziora. Brak jakichkolwiek zastrzeżeń. Tylko dodatkowe pochwały za super kontakt z właścicielami.",
  },
  {
    guestName: "Dominik",
    date: "August 2022",
    rating: 5,
    reviewBody:
      "Dom z duszą!!! Piękne drewniane wnętrze z pełnym wyposażeniem czterema pokojami i dwoma łazienkami. Kuchnia dobrze wyposażona niczego nie brakowało, a świeża kawa z palarni La Kafo w Augustowie smakuje wyśmienicie na tarasie z widokiem na jezioro. Ogromny ogród otoczony starymi drzewami zapewnia odpowiednią dawkę prywatności i pozwala odprężyć się i zrelaksować. Pomost, łódka i rowery zapewniają odpowiednią dawkę rozrywki. Szczerze polecam!!!",
  },
];

export type meteoWidgetIcon = {
  // iconCode: string;
  // icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  // icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

// : meteoWidgetIcon[]

export const meteoWidgetIcons = [
  {
    iconCode: "01d",
    // icon: <IconClearSkyDay />,
    icon: IconClearSkyDay,
  },
  {
    iconCode: "01n",
    icon: IconClearSkyNight,
  },
  {
    iconCode: "02d",
    icon: IconFewCloudsDay,
  },
  {
    iconCode: "02n",
    icon: IconFewCloudsNight,
  },
  {
    iconCode: "03d",
    icon: IconScatteredCloudsDay,
  },
  {
    iconCode: "03n",
    icon: IconScatteredCloudsNight,
  },
  {
    iconCode: "04d",
    icon: IconClouds,
  },
  {
    iconCode: "04n",
    icon: IconClouds,
  },
  {
    iconCode: "50d",
    icon: IconMist,
  },
  {
    iconCode: "50n",
    icon: IconMist,
  },
  {
    iconCode: "09d",
    icon: IconShowerDay,
  },
  {
    iconCode: "09n",
    icon: IconShowerNight,
  },
  {
    iconCode: "10d",
    icon: IconRainDay,
  },
  {
    iconCode: "10n",
    icon: IconRainNight,
  },
  {
    iconCode: "11d",
    icon: IconThunderstorm,
  },
  {
    iconCode: "11n",
    icon: IconThunderstorm,
  },
];

// export const meteoWidgetIcons = {
//   "01d": IconClearSkyDay,
//   "01n": IconClearSkyNight,
//   "02d": IconFewCloudsDay,
//   "02n": IconFewCloudsNight,
//   "03d": IconScatteredCloudsDay,
//   "03n": IconScatteredCloudsNight,
//   "04n": IconClouds,
//   "04d": IconClouds,
//   "50d": IconMist,
//   "50n": IconMist,
//   "09d": IconShowerDay,
//   "09n": IconShowerNight,
//   "10d": IconRainDay,
//   "10n": IconRainNight,
//   "11d": IconThunderstorm,
//   "11n": IconThunderstorm,
// };
