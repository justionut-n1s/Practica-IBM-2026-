import { CategoryCarouselItem } from "../components/organisms/index";
import {
  MilkAndDairy,
  WineAndAlcohol,
  ClothingAndBeauty,
  PetFood,
  PackagedFastFood,
  BakingMaterial,
  FruitsAndVegetables,
  FreshSeafood,
  BreadAndJuice,
  GroceryBag,
  Vegetables,
} from "../assets/images/index";

export const cardList: CategoryCarouselItem[] = [
  { id: 1, imageSrc: MilkAndDairy, cardLabel: "Milk & Dairy" },
  { id: 2, imageSrc: WineAndAlcohol, cardLabel: "Wine & Alcohol" },
  { id: 3, imageSrc: ClothingAndBeauty, cardLabel: "Clothing & Beauty" },
  { id: 4, imageSrc: PetFood, cardLabel: "Pet Food & Toys" },
  { id: 5, imageSrc: PackagedFastFood, cardLabel: "Packaged Fast Food" },
  { id: 6, imageSrc: BakingMaterial, cardLabel: "Baking Material" },
  { id: 7, imageSrc: FruitsAndVegetables, cardLabel: "Fresh Fruits" },
  { id: 8, imageSrc: FreshSeafood, cardLabel: "Fresh Seafood" },
  { id: 9, imageSrc: BreadAndJuice, cardLabel: "Bread & Juice" },
  { id: 10, imageSrc: Vegetables, cardLabel: "Vegetables" },
  { id: 11, imageSrc: GroceryBag, cardLabel: "Other categories" },
];
