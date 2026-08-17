import React from "react";
import { Logo, Option } from "../../atoms/index";
import { SearchBar, IconCombobox } from "../../molecules/index";
import { OptionsGroup, OptionsGroupItem } from "../index";
import { Location } from "../../../assets/icons/index";
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
  return (
    <div className="header-mid-section-style">
      <Logo logoHeight={45} logoWidth={147}></Logo>
      <SearchBar
        comboboxOptions={categoryList}
        placeholder="Search for items..."
        inputClassName="text-input text-input--header-input"
      ></SearchBar>
      <IconCombobox
        options={locationList}
        iconSrc={Location}
        size={16}
        label="Your Location"
        iconVariant="icon--gray"
      ></IconCombobox>
      <OptionsGroup optionsList={hyperlinkOptions}></OptionsGroup>
    </div>
  );
};

export default HeaderMidSection;
