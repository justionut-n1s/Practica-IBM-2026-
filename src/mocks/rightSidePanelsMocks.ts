import {
  milkAndDairy,
  clothingAndBeauty,
  petFood,
  bakingMaterial,
  freshFruit,
  nuts,
  organicCoffee,
  orangeCream,
} from "../assets/images/index";

export const categoryList = [
  {
    id: 1,
    imageSrc: milkAndDairy,
    alt: "MilkAndDairy",
    text: "Milk & Dairy",
    itemNumber: 3,
  },
  {
    id: 2,
    imageSrc: clothingAndBeauty,
    alt: "Clothing",
    text: "Clothing",
    itemNumber: 5,
  },
  {
    id: 3,
    imageSrc: petFood,
    alt: "PetFood",
    text: "Pet Food",
    itemNumber: 8,
  },
  {
    id: 4,
    imageSrc: bakingMaterial,
    alt: "BakingMaterial",
    text: "Baking Material",
    itemNumber: 2,
  },
  {
    id: 5,
    imageSrc: freshFruit,
    alt: "Fruits",
    text: "Fruits",
    itemNumber: 6,
  },
];

export const filterCheckboxList = [
  { id: 1, title: "Color", options: ["Red (56)", "Green (78)", "Blue (54)"] },
  {
    id: 2,
    title: "Item Condition",
    options: ["New (1506)", "Refurbished (27)", "Used (45)"],
  },
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
