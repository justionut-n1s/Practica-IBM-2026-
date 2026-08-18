import HeaderUpperSection from "../HeaderUpperSection/HeaderUpperSection";
import HeaderMidSection from "../HeaderMidSection/HeaderMidSection";
import HeaderBottomSection from "../HeaderBottomSection/HeaderBottomSection";
import { HyperlinkGroupItem, HeaderComboboxSectionItem } from "../../molecules";
import { OptionsGroupItem } from "../OptionsGroup/OptionsGroup";
import { Compare, Heart, Cart, Profile } from "../../../assets/icons";
import { Page } from "../../../types";

const hyperlinkList: HyperlinkGroupItem[] = [
  { id: 1, message: "About us", link: "#" },
  { id: 2, message: "My Account", link: "#" },
  { id: 3, message: "Wishlist", link: "#" },
  { id: 4, message: "Order Tracking", link: "#" },
];

const languageOptions = ["English", "French", "Spanish"];
const currencyOptions = ["USD", "CAD", "EUR"];
const locationOptions = ["Las Vegas, NV", "Henderson, NV", "Reno, NV"];

const comboboxList: HeaderComboboxSectionItem[] = [
  {
    key: 1,
    name: "language",
    id: "language",
    className: "combobox-style combobox-style--header-upper-section",
    selectedOptionLabel: "English",
    optionList: languageOptions,
  },
  {
    key: 2,
    name: "currency",
    id: "currency",
    className: "combobox-style combobox-style--header-upper-section",
    selectedOptionLabel: "USD",
    optionList: currencyOptions,
  },
];

const optionsList: OptionsGroupItem[] = [
  { id: 1, iconSrc: Compare, textItem: "Compare", link: "#" },
  { id: 2, iconSrc: Heart, textItem: "Wishlist", link: "#" },
  { id: 3, iconSrc: Cart, textItem: "Cart", link: "#" },
  { id: 4, iconSrc: Profile, textItem: "Account", link: "#" },
];

interface SiteHeaderProps {
  onNavigate: (page: Page) => void;
}

function SiteHeader({ onNavigate }: SiteHeaderProps) {
  return (
    <>
      <HeaderUpperSection
        hyperlinkList={hyperlinkList}
        comboboxList={comboboxList}
      />
      <HeaderMidSection
        optionList1={locationOptions}
        optionList2={locationOptions}
        hyperlinkOptions={optionsList}
      />
      <HeaderBottomSection onNavigate={onNavigate} />
    </>
  );
}

export default SiteHeader;
