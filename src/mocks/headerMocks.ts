import {
  HyperlinkGroupItem,
  HeaderComboboxSectionItem,
} from "../components/molecules/index";
import {
  OptionsGroupItem,
  NavGroupConfig,
} from "../components/organisms/index";
import { Compare, Heart, Cart, Profile } from "../assets/icons/index";

export const hyperlinkList: HyperlinkGroupItem[] = [
  { id: 1, message: "About us", link: "" },
  { id: 2, message: "My Account", link: "" },
  { id: 3, message: "Wishlist", link: "" },
  { id: 4, message: "Order Tracking", link: "" },
];

export const languageList = [
  { id: 1, label: "Spanish" },
  { id: 2, label: "French" },
  { id: 3, label: "Portuguese" },
  { id: 4, label: "German" },
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
    selectedOptionLabel: "English",
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
  { id: 1, label: "Milk & Dairy" },
  { id: 2, label: "Fruits & Vegetables" },
  { id: 3, label: "Baking Material" },
  { id: 4, label: "Bread & Juice" },
  { id: 5, label: "Snacks" },
];

export const locationList = [
  { id: 1, label: "Las Vegas, NV" },
  { id: 2, label: "Henderson, NV" },
  { id: 3, label: "San Francisco, CA" },
  { id: 4, label: "Reno, NV" },
  { id: 5, label: "Sacramento, CA" },
];

export const options: OptionsGroupItem[] = [
  { id: 1, iconSrc: Compare, textItem: "Compare", link: "" },
  { id: 2, iconSrc: Heart, textItem: "Wishlist", link: "" },
  { id: 3, iconSrc: Cart, textItem: "Cart", link: "" },
  { id: 4, iconSrc: Profile, textItem: "Account", link: "" },
];

export const navItems: NavGroupConfig[] = [
  {
    type: "dropdown",
    label: "Home",
    labelVariant: "hyp--span",
    chevronVariant: "green",
    options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
  },
  {
    type: "navitem",
    textItem: "About",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
  },
  {
    type: "dropdown",
    label: "Shop",
    options: ["Snacks", "Fruits", "Vegetables"],
  },
  {
    type: "dropdown",
    label: "Vendors",
    options: ["NestFood", "Hodo Foods", "Old El Paso"],
  },
  {
    type: "dropdown",
    label: "Mega menu",
    options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
  },
  {
    type: "dropdown",
    label: "Blog",
    options: [
      "Best Recipes in 2026",
      "Best Juices in 2026",
      "Best Wines in 2026",
    ],
  },
  {
    type: "dropdown",
    label: "Pages",
    options: ["About", "Shop", "Contact"],
  },
  {
    type: "navitem",
    textItem: "Contact",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
  },
];

export const bottomHeaderComboboxList = [
  { id: 1, label: "Milk & Dairy" },
  { id: 2, label: "Fruits & Vegetables" },
  { id: 3, label: "Baking Material" },
  { id: 4, label: "Bread & Juice" },
  { id: 5, label: "Snacks" },
];
