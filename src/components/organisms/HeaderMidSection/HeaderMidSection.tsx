import React from "react";
import { Logo, Option } from "../../atoms/index";
import { SearchBar, IconCombobox } from "../../molecules/index";
import { OptionsGroup, OptionsGroupItem } from "../index";
import { Location } from "../../../assets/icons/index";
import { translations } from "../../../translations/translations";
import "./HeaderMidSection.css";

interface HeaderMidSectionProps {
  categoryList: Option[];
  locationList: Option[];
  hyperlinkOptions: OptionsGroupItem[];
}

const HeaderMidSection: React.FC<HeaderMidSectionProps> = ({
  categoryList,
  locationList,
  hyperlinkOptions,
}) => {
  const translation = translations.en.headerMidSection;
  return (
    <div className="header-mid-section-style">
      <Logo logoHeight={45} logoWidth={147}></Logo>
      <SearchBar
        comboboxOptions={categoryList}
        placeholder={translation.placeholder}
        inputClassName="text-input text-input--header-input"
      ></SearchBar>
      <IconCombobox
        options={locationList}
        iconSrc={Location}
        size={16}
        label={translation.comboboxLabel}
        iconVariant="icon--gray"
      ></IconCombobox>
      <OptionsGroup optionsList={hyperlinkOptions}></OptionsGroup>
    </div>
  );
};

export default HeaderMidSection;
