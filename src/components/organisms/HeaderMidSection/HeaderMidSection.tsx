import React from "react";
import { Logo } from "../../atoms/index";
import { SearchBar, IconCombobox } from "../../molecules/index";
import { OptionsGroup, OptionsGroupItem } from "../index";
import { Location } from "../../../assets/icons/index";
import "./HeaderMidSection.css";

interface HeaderMidSectionProps {
  optionList1: string[];
  optionList2: string[];
  hyperlinkOptions: OptionsGroupItem[];
}

const HeaderMidSection: React.FC<HeaderMidSectionProps> = ({
  optionList1,
  optionList2,
  hyperlinkOptions,
}) => {
  return (
    <div className="header-mid-section-style">
      <Logo logoHeight={34} logoWidth={112}></Logo>
      <SearchBar
        comboboxOptions={optionList1}
        placeholder="Search for items..."
        inputClassName="text-input text-input--header-input"
      ></SearchBar>
      <IconCombobox
        options={optionList2}
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
