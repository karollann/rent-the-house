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
import { ReactElement, SVGProps } from "react";

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

// Object.keys(dupa) // = ['kitchen', 'bathroom']
// Object.values(dupa) // = [[{ icon: 'fire', name: 'Fire pit'}, {}], [{}]]

export const primaryAmenityCardData = [
  { icon: IconPeople, name: "8 Guests" },
  { icon: IconBedroom, name: "4 Bedrooms" },
  { icon: IconBedLinens, name: "5 Beds" },
  { icon: IconBathroom, name: "2 Bathrooms" },
];
