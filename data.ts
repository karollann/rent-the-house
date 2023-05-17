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
  translationKeyName: string;
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
    {
      icon: IconDishwasher,
      translationKeyName: "amenitiesModal.amenitiesNames.dishwasher",
      displayFirst: true,
    },
    {
      icon: IconInductionStove,
      translationKeyName: "amenitiesModal.amenitiesNames.inductionStove",
    },
    {
      icon: IconKettle,
      translationKeyName: "amenitiesModal.amenitiesNames.kettle",
    },
    {
      icon: IconCoffeeMaker,
      translationKeyName: "amenitiesModal.amenitiesNames.coffeeMaker",
      displayFirst: true,
    },
    {
      icon: IconCoffeeBean,
      translationKeyName: "amenitiesModal.amenitiesNames.coffee",
    },
    {
      icon: IconWineGlass,
      translationKeyName: "amenitiesModal.amenitiesNames.wineGlasses",
    },
    {
      icon: IconFridge,
      translationKeyName: "amenitiesModal.amenitiesNames.refrigerator",
    },
    {
      icon: IconKitchenBasics,
      translationKeyName: "amenitiesModal.amenitiesNames.cookingBasics",
    },
  ],
  bathroom: [
    {
      icon: IconHairDryer,
      translationKeyName: "amenitiesModal.amenitiesNames.hairDryer",
    },
    {
      icon: IconCleaningProducts,
      translationKeyName: "amenitiesModal.amenitiesNames.cleaning",
    },
    {
      icon: IconHotWater,
      translationKeyName: "amenitiesModal.amenitiesNames.hotWater",
    },
  ],
  bedroom: [
    {
      icon: IconBedLinens,
      translationKeyName: "amenitiesModal.amenitiesNames.bedLinens",
    },
    {
      icon: IconWindowShades,
      translationKeyName: "amenitiesModal.amenitiesNames.shades",
      displayFirst: true,
    },
    {
      icon: IconDryingRack,
      translationKeyName: "amenitiesModal.amenitiesNames.dryingRack",
    },
  ],
  views: [
    {
      icon: IconLake,
      translationKeyName: "amenitiesModal.amenitiesNames.lakeView",
      displayFirst: true,
    },
    {
      icon: IconBackyard,
      translationKeyName: "amenitiesModal.amenitiesNames.gardenView",
    },
  ],
  outdoor: [
    {
      icon: IconBalcony,
      translationKeyName: "amenitiesModal.amenitiesNames.privatePatio",
    },
    {
      icon: IconBackyard,
      translationKeyName: "amenitiesModal.amenitiesNames.privateBackyard",
      highlighted: true,
    },
    {
      icon: IconOutdoorFurniture,
      translationKeyName: "amenitiesModal.amenitiesNames.outdoorFurniture",
      displayFirst: true,
    },
    {
      icon: IconHammock,
      translationKeyName: "amenitiesModal.amenitiesNames.hammock",
    },
    {
      icon: IconGrill,
      translationKeyName: "amenitiesModal.amenitiesNames.grill",
      displayFirst: true,
    },
    {
      icon: IconBike,
      translationKeyName: "amenitiesModal.amenitiesNames.bikes",
      displayFirst: true,
    },
  ],
  entertainment: [
    {
      icon: IconBook,
      translationKeyName: "amenitiesModal.amenitiesNames.books",
    },
    {
      icon: IconTelevision,
      translationKeyName: "amenitiesModal.amenitiesNames.HDTV",
    },
    { icon: IconWiFi, translationKeyName: "WiFi", highlighted: true },
    {
      icon: IconFirePit,
      translationKeyName: "amenitiesModal.amenitiesNames.firePit",
      displayFirst: true,
    },
  ],
  heating: [
    {
      icon: IconFireplace,
      translationKeyName: "amenitiesModal.amenitiesNames.indoorFireplace",
      displayFirst: true,
    },
    {
      icon: IconRadiator,
      translationKeyName: "amenitiesModal.amenitiesNames.electricRadiators",
    },
  ],
  safety: [
    {
      icon: IconSmokeDetector,
      translationKeyName: "amenitiesModal.amenitiesNames.smokeAlarm",
    },
    {
      icon: IconCarbonMonoxideDetector,
      translationKeyName: "amenitiesModal.amenitiesNames.carbonMonoxideAlarm",
    },
    {
      icon: IconFireExtinguisher,
      translationKeyName: "amenitiesModal.amenitiesNames.fireExtinguisher",
    },
  ],
  services: [
    {
      icon: IconPet,
      translationKeyName: "amenitiesModal.amenitiesNames.petsAllowed",
      highlighted: true,
    },
    {
      icon: IconHostGreets,
      translationKeyName: "amenitiesModal.amenitiesNames.hostGreets",
      displayFirst: true,
    },
    {
      icon: IconParking,
      translationKeyName: "amenitiesModal.amenitiesNames.freeParking",
      highlighted: true,
    },
  ],
  notIncluded: [
    {
      icon: IconWashingMachine,
      translationKeyName: "amenitiesModal.amenitiesNames.washingMachine",
    },
  ],
};

export const primaryAmenityCardData = [
  { icon: IconPeople, translationKeyName: "primaryAmenityCard.8guests" },
  { icon: IconBedroom, translationKeyName: "primaryAmenityCard.4bedrooms" },
  { icon: IconBedLinens, translationKeyName: "primaryAmenityCard.5beds" },
  { icon: IconBathroom, translationKeyName: "primaryAmenityCard.2bathrooms" },
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

export type ReviewDataType = {
  guestName: string;
  translationKeyMonth: string;
  year: string;
  rating: number;
  translationKeyReviewBody: string;
};

export const reviewsData: ReviewDataType[] = [
  {
    guestName: "Adam",
    translationKeyMonth: "reviews.months.july",
    year: "2022",
    rating: 5,
    translationKeyReviewBody: "reviews.reviewBody.0",
  },
  {
    guestName: "Bartosz",
    translationKeyMonth: "reviews.months.august",
    year: "2022",
    rating: 5,
    translationKeyReviewBody: "reviews.reviewBody.1",
  },
  {
    guestName: "Dominik",
    translationKeyMonth: "reviews.months.august",
    year: "2022",
    rating: 5,
    translationKeyReviewBody: "reviews.reviewBody.2",
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
    src: "images_1067px/cake_1067px.jpg",
    alt: "Picture of a cake",
    width: 1600,
    height: 2400,
    images: [
      { src: "images_1067px/cake_1067px.jpg", width: 1600, height: 2400 },
      { src: "images_800px/cake_800px.jpg", width: 533, height: 800 },
      { src: "images_450px/cake_450px.jpg", width: 300, height: 450 },
      { src: "images_180px/cake_180px.jpg", width: 120, height: 180 },
    ],
  },
  {
    src: "images_1067px/lakeView_1067px.jpg",
    alt: "Picture of a lake",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/lakeView_1067px.jpg", width: 1600, height: 1067 },
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
    src: "images_1067px/field_1067px.jpg",
    alt: "Picture of a field at the property",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/field_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/field_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/field_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/field_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/house_1067px.jpg",
    alt: "Picture of a house",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/house_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/house_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/house_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/house_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/gravelRoad_1067px.jpg",
    alt: "Picture of a gravel road in the neighbourhood",
    width: 1600,
    height: 2139,
    images: [
      { src: "images_1067px/gravelRoad_1067px.jpg", width: 1600, height: 2139 },
      { src: "images_800px/gravelRoad_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/gravelRoad_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/gravelRoad_180px.jpg", width: 135, height: 180 },
    ],
  },

  {
    src: "images_1067px/garden_1067px.jpg",
    alt: "View from the tarrace",
    width: 1600,
    height: 1197,
    images: [
      { src: "images_1067px/garden_1067px.jpg", width: 1600, height: 1197 },
      { src: "images_800px/garden_800px.jpg", width: 1069, height: 800 },
      { src: "images_450px/garden_450px.jpg", width: 601, height: 450 },
      { src: "images_180px/garden_180px.jpg", width: 241, height: 180 },
    ],
  },
  {
    src: "images_1067px/web_1067px.jpg",
    alt: "Picture of a spider's web",
    width: 1600,
    height: 2139,
    images: [
      { src: "images_1067px/web_1067px.jpg", width: 1600, height: 2139 },
      { src: "images_800px/web_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/web_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/web_180px.jpg", width: 135, height: 180 },
    ],
  },
  {
    src: "images_1067px/fieldView_1067px.jpg",
    alt: "Lake view from the property",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/fieldView_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/fieldView_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/fieldView_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/fieldView_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/lake_1067px.jpg",
    alt: "Picture of a lake",
    width: 1600,
    height: 2139,
    images: [
      { src: "images_1067px/lake_1067px.jpg", width: 1600, height: 800 },
      { src: "images_800px/lake_800px.jpg", width: 598, height: 800 },
      { src: "images_450px/lake_450px.jpg", width: 336, height: 450 },
      { src: "images_180px/lake_180px.jpg", width: 135, height: 180 },
    ],
  },
  {
    src: "images_1067px/lakeWinter_1067px.jpg",
    alt: "Picture of a lake in the winter",
    width: 1600,
    height: 1069,
    images: [
      { src: "images_1067px/lakeWinter_1067px.jpg", width: 1600, height: 800 },
      { src: "images_800px/lakeWinter_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/lakeWinter_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/lakeWinter_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_1067px/livingroom1_1067px.jpg",
    alt: "Picture of the livingroom",
    width: 1600,
    height: 1067,
    images: [
      {
        src: "images_1067px/livingroom1_1067px.jpg",
        width: 1600,
        height: 1067,
      },
      { src: "images_800px/livingroom1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/livingroom1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/livingroom1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/livingroom2_1067px.jpg",
    alt: "Picture of the livingroom",
    width: 1600,
    height: 1067,
    images: [
      {
        src: "images_1067px/livingroom2_1067px.jpg",
        width: 1600,
        height: 1067,
      },
      { src: "images_800px/livingroom2_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/livingroom2_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/livingroom2_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/livingroomKitchen_1067px.jpg",
    alt: "Picture of the livingroom and the kitchen",
    width: 1600,
    height: 1067,
    images: [
      {
        src: "images_1067px/livingroomKitchen_1067px.jpg",
        width: 1600,
        height: 800,
      },
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
    src: "images_1067px/kitchen_1067px.jpg",
    alt: "Picture of the kitchen",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/kitchen_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/kitchen_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/kitchen_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/kitchen_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/window_1067px.jpg",
    alt: "Picture of a window",
    width: 1600,
    height: 2400,
    images: [
      { src: "images_1067px/window_1067px.jpg", width: 1600, height: 2400 },
      { src: "images_800px/window_800px.jpg", width: 533, height: 800 },
      { src: "images_450px/window_450px.jpg", width: 300, height: 450 },
      { src: "images_180px/window_180px.jpg", width: 120, height: 180 },
    ],
  },
  {
    src: "images_1067px/publicBeach1_1067px.jpg",
    alt: "Picture of a public beach in the neighbourhood",
    width: 1600,
    height: 1069,
    images: [
      {
        src: "images_1067px/publicBeach1_1067px.jpg",
        width: 1600,
        height: 1069,
      },
      { src: "images_800px/publicBeach1_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/publicBeach1_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/publicBeach1_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_1067px/publicBeach2_1067px.jpg",
    alt: "Picture of a public beach in the neighbourhood",
    width: 1600,
    height: 1069,
    images: [
      {
        src: "images_1067px/publicBeach2_1067px.jpg",
        width: 1600,
        height: 1069,
      },
      { src: "images_800px/publicBeach2_800px.jpg", width: 1197, height: 800 },
      { src: "images_450px/publicBeach2_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/publicBeach2_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_1067px/courts_1067px.jpg",
    alt: "Picture of courts in the neighbourhood",
    width: 1600,
    height: 1069,
    images: [
      { src: "images_1067px/courts_1067px.jpg", width: 1600, height: 1069 },
      { src: "images_800px/courts_800px.jpg", width: 1196, height: 800 },
      { src: "images_450px/courts_450px.jpg", width: 673, height: 450 },
      { src: "images_180px/courts_180px.jpg", width: 269, height: 180 },
    ],
  },
  {
    src: "images_1067px/publicBeachParking_1067px.jpg",
    alt: "Picture of a public beach parking",
    width: 1600,
    height: 1069,
    images: [
      {
        src: "images_1067px/publicBeachParking_1067px.jpg",
        width: 1600,
        height: 1069,
      },
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
    src: "images_1067px/road_1067px.jpg",
    alt: "Picture of a road and fields in the neighbourhood",
    width: 1600,
    height: 1197,
    images: [
      { src: "images_1067px/road_1067px.jpg", width: 1600, height: 1197 },
      { src: "images_800px/road_800px.jpg", width: 1069, height: 800 },
      { src: "images_450px/road_450px.jpg", width: 601, height: 450 },
      { src: "images_180px/road_180px.jpg", width: 241, height: 180 },
    ],
  },

  {
    src: "images_1067px/bathroom2_1067px.jpg",
    alt: "Picture of a bathroom - first floor",
    width: 1600,
    height: 2844,
    images: [
      { src: "images_1067px/bathroom2_1067px.jpg", width: 1600, height: 2844 },
      { src: "images_800px/bathroom2_800px.jpg", width: 450, height: 800 },
      { src: "images_450px/bathroom2_450px.jpg", width: 253, height: 450 },
      { src: "images_180px/bathroom2_180px.jpg", width: 101, height: 180 },
    ],
  },
  {
    src: "images_1067px/bathroom1_1067px.jpg",
    alt: "Picture of a bathroom - groundfloor",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/bathroom1_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/bathroom1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/bathroom1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/bathroom1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/room1_1067px.jpg",
    alt: "Picture of the first room",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/room1_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/room1_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room1_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room1_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/room2_1067px.jpg",
    alt: "Picture of the second room",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/room2_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/room2_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room2_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room2_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/room3_1067px.jpg",
    alt: "Picture of the third room",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/room3_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/room3_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room3_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room3_180px.jpg", width: 270, height: 180 },
    ],
  },
  {
    src: "images_1067px/room4_1067px.jpg",
    alt: "Picture of the fourth room",
    width: 1600,
    height: 1067,
    images: [
      { src: "images_1067px/room4_1067px.jpg", width: 1600, height: 1067 },
      { src: "images_800px/room4_800px.jpg", width: 1200, height: 800 },
      { src: "images_450px/room4_450px.jpg", width: 675, height: 450 },
      { src: "images_180px/room4_180px.jpg", width: 270, height: 180 },
    ],
  },
];

type MobileHeaderMenuElementDataType = {
  link: string;
  translationKey: string;
  id: string;
};

export const mobileHeaderMenuElementData: MobileHeaderMenuElementDataType[] = [
  { link: "#about", translationKey: "header.about", id: "about" },
  { link: "#amenities", translationKey: "header.amenities", id: "amenities" },
  // { link: "#rates", translationKey: "header.rates", id: "rates" },
  { link: "#gallery", translationKey: "header.gallery", id: "gallery" },
  { link: "#reviews", translationKey: "header.reviews", id: "reviews" },
  { link: "#location", translationKey: "header.location", id: "location" },
  // { translationKey: "header.contact" },
];
