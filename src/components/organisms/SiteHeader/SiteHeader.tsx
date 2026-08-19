import HeaderUpperSection from "../HeaderUpperSection/HeaderUpperSection";
import HeaderMidSection from "../HeaderMidSection/HeaderMidSection";
import HeaderBottomSection from "../HeaderBottomSection/HeaderBottomSection";
import {
  hyperlinkList,
  locationList,
  allCategoriesList,
  bottomHeaderComboboxList,
  navItems,
  comboboxList,
  options,
} from "../../../mocks/index";
import { Page } from "../../../types";

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
        categoryList={allCategoriesList}
        locationList={locationList}
        hyperlinkOptions={options}
      />
      <HeaderBottomSection
        optionList={bottomHeaderComboboxList}
        navItemList={navItems}
        onNavigate={onNavigate}
      />
    </>
  );
}

export default SiteHeader;
