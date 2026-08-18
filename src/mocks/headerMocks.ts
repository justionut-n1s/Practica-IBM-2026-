import {
  HyperlinkGroupItem,
  HeaderComboboxSectionItem,
} from "../components/molecules/index";
import {
  OptionsGroupItem,
  NavGroupConfig,
} from "../components/organisms/index";
import { Compare, Heart, Cart, Profile } from "../assets/icons/index";
import { translations } from "../translations/translations";

const navbarTranslate = translations.en.navbar;
const hyperlinkListTranslate = translations.en.hyperlinkList;
const languageTranslate = translations.en.languageList;
const categoryTranslate = translations.en.categoryList;
const optionTranslate = translations.en.optionGroup;

export const hyperlinkList: HyperlinkGroupItem[] = [
  { id: 1, message: hyperlinkListTranslate.about, link: "" },
  { id: 2, message: hyperlinkListTranslate.account, link: "" },
  { id: 3, message: hyperlinkListTranslate.wishlist, link: "" },
  { id: 4, message: hyperlinkListTranslate.orderTracking, link: "" },
];

export const languageList = [
  { id: 1, label: languageTranslate.spanish },
  { id: 2, label: languageTranslate.french },
  { id: 3, label: languageTranslate.portuguese },
  { id: 4, label: languageTranslate.german },
];

export const currencyList = [
  { id: 1, label: "CAD" },
  { id: 2, label: "EUR" },
  { id: 3, label: "CHF" },
];

export const comboboxList: HeaderComboboxSectionItem[] = [
  {
    key: 1,
    name: "firstCB",
    id: "1",
    className: "combobox-style combobox-style--header-upper-section",
    selectedOptionLabel: languageTranslate.english,
    optionList: languageList,
  },
  {
    key: 2,
    name: "secondCB",
    id: "2",
    className: "combobox-style combobox-style--header-upper-section",
    selectedOptionLabel: "USD",
    optionList: currencyList,
  },
];

export const allCategoriesList = [
  { id: 1, label: categoryTranslate.milkAndDairy },
  { id: 2, label: categoryTranslate.vegetables },
  { id: 3, label: categoryTranslate.bakingMaterial },
  { id: 4, label: categoryTranslate.breadAndJuice },
  { id: 5, label: categoryTranslate.fastFood },
];

export const locationList = [
  { id: 1, label: "Las Vegas, NV" },
  { id: 2, label: "Henderson, NV" },
  { id: 3, label: "San Francisco, CA" },
  { id: 4, label: "Reno, NV" },
  { id: 5, label: "Sacramento, CA" },
];

export const options: OptionsGroupItem[] = [
  { id: 1, iconSrc: Compare, textItem: optionTranslate.compare, link: "" },
  { id: 2, iconSrc: Heart, textItem: optionTranslate.wishlist, link: "" },
  { id: 3, iconSrc: Cart, textItem: optionTranslate.cart, link: "" },
  { id: 4, iconSrc: Profile, textItem: optionTranslate.account, link: "" },
];

export const navItems: NavGroupConfig[] = [
  {
    type: "dropdown",
    label: navbarTranslate.home,
    labelVariant: "hyp--span",
    chevronVariant: "green",
    options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
  },
  {
    type: "navitem",
    textItem: navbarTranslate.about,
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
  },
  {
    type: "dropdown",
    label: navbarTranslate.shop,
    options: ["Snacks", "Fruits", "Vegetables"],
  },
  {
    type: "dropdown",
    label: navbarTranslate.vendors,
    options: ["NestFood", "Hodo Foods", "Old El Paso"],
  },
  {
    type: "dropdown",
    label: navbarTranslate.megaMenu,
    options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
  },
  {
    type: "dropdown",
    label: navbarTranslate.blog,
    options: [
      "Best Recipes in 2026",
      "Best Juices in 2026",
      "Best Wines in 2026",
    ],
  },
  {
    type: "dropdown",
    label: navbarTranslate.pages,
    options: ["About", "Shop", "Contact"],
  },
  {
    type: "navitem",
    textItem: navbarTranslate.contact,
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
  },
];

export const bottomHeaderComboboxList = [
  { id: 1, label: categoryTranslate.milkAndDairy },
  { id: 2, label: categoryTranslate.clothing },
  { id: 3, label: categoryTranslate.bakingMaterial },
  { id: 4, label: categoryTranslate.wineAndAlcohol },
  { id: 5, label: categoryTranslate.fruits },
];
