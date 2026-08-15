import React from "react";
import { Text, Combobox, ComboboxProps } from "../../atoms/index";
import "./HeaderComboboxSection.css";

export interface HeaderComboboxSectionItem extends ComboboxProps {
  key: number;
}

export interface HeaderComboboxSectionProps {
  comboboxContentList: HeaderComboboxSectionItem[];
}

const HeaderComboboxSection: React.FC<HeaderComboboxSectionProps> = ({
  comboboxContentList,
}) => {
  return (
    <div className="combobox-section">
      <div className="combobox-section combobox-section__item">
        <Text variant="header-upper-section">
          Need help? Call us:
          <Text variant="header-upper-section--span" type="span">
            + 1800 900
          </Text>
        </Text>
      </div>
      {comboboxContentList.map(({ key, ...otherProps }) => (
        <div className="combobox-section combobox-section__item">
          <Combobox key={key} {...otherProps}></Combobox>
        </div>
      ))}
    </div>
  );
};

export default HeaderComboboxSection;
