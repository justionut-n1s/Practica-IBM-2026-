import {
  MilkAndDairy,
  ClothingAndBeauty,
  PetFood,
  BakingMaterial,
  FruitsAndVegetables,
  nuts,
  organicCoffee,
  orangeCream,
} from "../assets/images/index";

export const categoryList = [
  {
    id: 1,
    imageSrc: MilkAndDairy,
    alt: "MilkAndDairy",
    text: "Milk & Dairy",
    itemNumber: 3,
  },
  {
    id: 2,
    imageSrc: ClothingAndBeauty,
    alt: "Clothing",
    text: "Clothing",
    itemNumber: 5,
  },
  {
    id: 3,
    imageSrc: PetFood,
    alt: "PetFood",
    text: "Pet Food",
    itemNumber: 8,
  },
  {
    id: 4,
    imageSrc: BakingMaterial,
    alt: "BakingMaterial",
    text: "Baking Material",
    itemNumber: 2,
  },
  {
    id: 5,
    imageSrc: FruitsAndVegetables,
    alt: "Fruits",
    text: "Fruits",
    itemNumber: 6,
  },
];

export const checkboxList = [
  { id: 1, title: "Color", options: ["Red", "Green", "Blue"] },
  { id: 2, title: "Item Condition", options: ["New", "Refurbished", "Used"] },
];

export const newProducts = [
  {
    id: 1,
    imageSrc: nuts,
    name: "Chen Cardigan",
    name_link: "",
    rating: 3.5,
    price: "22.99",
  },
  {
    id: 2,
    imageSrc: organicCoffee,
    name: "Chen Sweater",
    name_link: "",
    rating: 4.6,
    price: "36.99",
  },
  {
    id: 3,
    imageSrc: orangeCream,
    name: "Colorful Jacket",
    name_link: "",
    rating: 2.4,
    price: "45.99",
  },
];
