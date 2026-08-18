import { CategoryCarouselItem } from "../components/organisms/index";
import {
  milkAndDairy,
  wineAndAlcohol,
  clothingAndBeauty,
  petFood,
  packagedFastFood,
  bakingMaterial,
  freshFruit,
  freshSeafood,
  breadAndJuice,
  groceryBag,
  vegetables,
} from "../assets/images/index";
import { translations } from "../translations/translations";

const categoryTranslate = translations.en.categoryList;

export const cardList: CategoryCarouselItem[] = [
  { id: 1, imageSrc: milkAndDairy, cardLabel: categoryTranslate.milkAndDairy },
  {
    id: 2,
    imageSrc: wineAndAlcohol,
    cardLabel: categoryTranslate.wineAndAlcohol,
  },
  { id: 3, imageSrc: clothingAndBeauty, cardLabel: categoryTranslate.clothing },
  { id: 4, imageSrc: petFood, cardLabel: categoryTranslate.petFood },
  { id: 5, imageSrc: packagedFastFood, cardLabel: categoryTranslate.fastFood },
  {
    id: 6,
    imageSrc: bakingMaterial,
    cardLabel: categoryTranslate.bakingMaterial,
  },
  { id: 7, imageSrc: freshFruit, cardLabel: categoryTranslate.fruits },
  { id: 8, imageSrc: freshSeafood, cardLabel: categoryTranslate.seafood },
  {
    id: 9,
    imageSrc: breadAndJuice,
    cardLabel: categoryTranslate.breadAndJuice,
  },
  { id: 10, imageSrc: vegetables, cardLabel: categoryTranslate.vegetables },
  { id: 11, imageSrc: groceryBag, cardLabel: categoryTranslate.otherCateg },
];
