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
import { Photo } from "react-photo-album";

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

export const photos: Photo[] = [
  {
    src: "images_800px/cake_800px.jpg",
    alt: "Picture of a cake",
    width: 533,
    height: 800,
    images: [
      { src: "images_800px/cake_800px.jpg", width: 533, height: 800 },
      { src: "images_450px/cake_450px.jpg", width: 300, height: 450 },
      { src: "images_180px/cake_180px.jpg", width: 120, height: 180 },
    ],
  },
  {
    src: "images_800px/lakeView_800px.jpg",
    alt: "Picture of a lake",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/lakeView_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/lakeView_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/lakeView_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/coffee_800px.jpg",
    alt: "Coffee picture",
    width: 535,
    height: 800,
    images: [
      { src: "images_800px/coffee_800px.jpg", width: 535, height: 800 },
      { src: "images_450px/coffee_450px.jpg", width: 301, height: 450 },
      { src: "images_180px/coffee_180px.jpg", width: 120, height: 180 },
    ],
  },
  {
    src: "images_800px/field_800px.jpg",
    alt: "Picture of a field at the property",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/field_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/field_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/field_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/house_800px.jpg",
    alt: "Picture of a house",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/house_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/house_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/house_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/gravelRoad_800px.jpg",
    alt: "Picture of a gravel road in the neighbourhood",
    width: 598,
    height: 800,
    images: [
      { src: "images_800px/gravelRoad_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/gravelRoad_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/gravelRoad_180px.jpg", width: 135, height: 180 },
    ],
  },

  {
    src: "images_800px/garden_800px.jpg",
    alt: "View from the tarrace",
    width: 1069,
    height: 800,
    images: [
      { src: "images_800px/garden_800px.jpg", width: 1069, height: 800 },
      { src: "images_450px/garden_450px.jpg", width: 601, height: 450 },
      { src: "images_180px/garden_180px.jpg", width: 241, height: 180 },
    ],
  },
  {
    src: "images_800px/web_800px.jpg",
    alt: "Picture of a spider's web",
    width: 598,
    height: 800,
    images: [
      { src: "images_800px/web_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/web_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/web_180px.jpg", width: 135, height: 180 },
    ],
  },
  {
    src: "images_800px/fieldView_800px.jpg",
    alt: "Lake view from the property",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/fieldView_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/fieldView_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/fieldView_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/lake_800px.jpg",
    alt: "Picture of a lake",
    width: 598,
    height: 800,
    images: [
      { src: "images_800px/lake_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/lake_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/lake_180px.jpg", width: 135, height: 180 },
    ],
  },
  {
    src: "images_800px/lakeWinter_800px.jpg",
    alt: "Picture of a lake in the winter",
    width: 1197,
    height: 800,
    images: [
      { src: "images_800px/lakeWinter_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/lakeWinter_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/lakeWinter_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_800px/livingroom1_800px.jpg",
    alt: "Picture of the livingroom",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/livingroom1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/livingroom1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/livingroom1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/livingroom2_800px.jpg",
    alt: "Picture of the livingroom",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/livingroom2_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/livingroom2_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/livingroom2_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/livingroomKitchen_800px.jpg",
    alt: "Picture of the livingroom and the kitchen",
    width: 1200,
    height: 800,
    images: [
      {
        src: "images_800px/livingroomKitchen_800px.jpg",
        width: 1200,
        height: 800,
      },
      {
        src: "images_450px/livingroomKitchen_450px.jpg",
        width: 675,
        height: 450,
      },
      {
        src: "images_180px/livingroomKitchen_180px.jpg",
        width: 270,
        height: 180,
      },
    ],
  },
  {
    src: "images_800px/kitchen_800px.jpg",
    alt: "Picture of the kitchen",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/kitchen_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/kitchen_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/kitchen_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/window_800px.jpg",
    alt: "Picture of a window",
    width: 533,
    height: 800,
    images: [
      { src: "images_800px/window_800px.jpg", width: 533, height: 800 },
      { src: "images_450px/window_450px.jpg", width: 300, height: 450 },
      { src: "images_180px/window_180px.jpg", width: 120, height: 180 },
    ],
  },
  {
    src: "images_800px/publicBeach1_800px.jpg",
    alt: "Picture of a public beach in the neighbourhood",
    width: 1197,
    height: 800,
    images: [
      { src: "images_800px/publicBeach1_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/publicBeach1_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/publicBeach1_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_800px/publicBeach2_800px.jpg",
    alt: "Picture of a public beach in the neighbourhood",
    width: 1197,
    height: 800,
    images: [
      { src: "images_800px/publicBeach2_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/publicBeach2_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/publicBeach2_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_800px/courts_800px.jpg",
    alt: "Picture of courts in the neighbourhood",
    width: 1196,
    height: 800,
    images: [
      { src: "images_800px/courts_800px.jpg", width: 1196, height: 800 },
      { src: "images_450px/courts_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/courts_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_800px/publicBeachParking_800px.jpg",
    alt: "Picture of a public beach parking",
    width: 1197,
    height: 800,
    images: [
      {
        src: "images_800px/publicBeachParking_800px.jpg",
        width: 1197,
        height: 800,
      },
      {
        src: "images_450px/publicBeachParking_450px.jpg",
        width: 673,
        height: 450,
      },
      {
        src: "images_180px/publicBeachParking_180px.jpg",
        width: 269,
        height: 180,
      },
    ],
  },
  {
    src: "images_800px/road_800px.jpg",
    alt: "Picture of a road and fields in the neighbourhood",
    width: 1069,
    height: 800,
    images: [
      { src: "images_800px/road_800px.jpg", width: 1069, height: 800 },
      { src: "images_450px/road_450px.jpg", width: 601, height: 450 },
      { src: "images_180px/road_180px.jpg", width: 241, height: 180 },
    ],
  },

  {
    src: "images_800px/bathroom2_800px.jpg",
    alt: "Picture of a bathroom - groundfloor",
    width: 450,
    height: 800,
    images: [
      { src: "images_800px/bathroom2_800px.jpg", width: 450, height: 800 },
      { src: "images_450px/bathroom2_450px.jpg", width: 253, height: 450 },
      { src: "images_180px/bathroom2_180px.jpg", width: 101, height: 180 },
    ],
  },
  {
    src: "images_800px/bathroom1_800px.jpg",
    alt: "Picture of a bathroom - first floor",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/bathroom1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/bathroom1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/bathroom1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/room1_800px.jpg",
    alt: "Picture of the first room",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/room1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/room2_800px.jpg",
    alt: "Picture of the second room",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/room2_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room2_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room2_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/room3_800px.jpg",
    alt: "Picture of the third room",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/room3_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room3_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room3_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_800px/room4_800px.jpg",
    alt: "Picture of the fourth room",
    width: 1200,
    height: 800,
    images: [
      { src: "images_800px/room4_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room4_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room4_180px.jpg", width: 270, height: 180 },
    ],
  },
];
