import {
  milkAndDairy,
  clothingAndBeauty,
  petFood,
  bakingMaterial,
  freshFruit,
  vegetables,
  freshSeafood,
  breadAndJuice,
  packagedFastFood,
  wineAndAlcohol,
  groceryBag,
  nuts,
  organicCoffee,
  orangeCream,
} from "../assets/images/index";
import { translations } from "../translations/translations";

const categoryTranslate = translations.en.categoryList;

export const categoryList = [
  {
    id: 1,
    imageSrc: milkAndDairy,
    alt: "MilkAndDairy",
    text: categoryTranslate.milkAndDairy,
    itemNumber: 11,
  },
  {
    id: 2,
    imageSrc: clothingAndBeauty,
    alt: "Clothing",
    text: categoryTranslate.clothing,
    itemNumber: 8,
  },
  {
    id: 3,
    imageSrc: petFood,
    alt: "PetFood",
    text: categoryTranslate.petFood,
    itemNumber: 4,
  },
  {
    id: 4,
    imageSrc: bakingMaterial,
    alt: "BakingMaterial",
    text: categoryTranslate.bakingMaterial,
    itemNumber: 4,
  },
  {
    id: 5,
    imageSrc: freshFruit,
    alt: "Fruits",
    text: categoryTranslate.fruits,
    itemNumber: 10,
  },
  {
    id: 6,
    imageSrc: vegetables,
    alt: "Vegetables",
    text: categoryTranslate.vegetables,
    itemNumber: 5,
  },
  {
    id: 7,
    imageSrc: wineAndAlcohol,
    alt: "Alcohol",
    text: categoryTranslate.wineAndAlcohol,
    itemNumber: 5,
  },
  {
    id: 8,
    imageSrc: freshSeafood,
    alt: "Seafood",
    text: categoryTranslate.seafood,
    itemNumber: 2,
  },
  {
    id: 9,
    imageSrc: breadAndJuice,
    alt: "BreadAndJuice",
    text: categoryTranslate.breadAndJuice,
    itemNumber: 6,
  },
  {
    id: 10,
    imageSrc: packagedFastFood,
    alt: "FastFood",
    text: categoryTranslate.fastFood,
    itemNumber: 4,
  },
  {
    id: 11,
    imageSrc: groceryBag,
    alt: "Others",
    text: categoryTranslate.otherCateg,
    itemNumber: 15,
  },
];

export const shopCategoryList = [
  {
    id: 1,
    imageSrc: milkAndDairy,
    alt: "MilkAndDairy",
    text: categoryTranslate.milkAndDairy,
    itemNumber: 11,
  },
  {
    id: 2,
    imageSrc: clothingAndBeauty,
    alt: "Clothing",
    text: categoryTranslate.clothing,
    itemNumber: 8,
  },
  {
    id: 3,
    imageSrc: petFood,
    alt: "PetFood",
    text: categoryTranslate.petFood,
    itemNumber: 4,
  },
  {
    id: 4,
    imageSrc: bakingMaterial,
    alt: "BakingMaterial",
    text: categoryTranslate.bakingMaterial,
    itemNumber: 4,
  },
  {
    id: 5,
    imageSrc: freshFruit,
    alt: "Fruits",
    text: categoryTranslate.fruits,
    itemNumber: 10,
  },
];

export const colors = [
  { label: "Red", count: 56 },
  { label: "Green", count: 78 },
  { label: "Blue", count: 54 },
];

export const itemCondition = [
  { label: "New", count: 1506 },
  { label: "Refurbished", count: 27 },
  { label: "Used", count: 45 },
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
