import React from "react";
import { Text } from "../../atoms/index";
import {
  HyperlinkGroup,
  HyperlinkGroupItem,
  HeaderComboboxSection,
  HeaderComboboxSectionItem,
} from "../../molecules/index";
import "./HeaderUpperSection.css";

interface HeaderUpperSectionProps {
  hyperlinkList: HyperlinkGroupItem[];
  comboboxList: HeaderComboboxSectionItem[];
}

const HeaderUpperSection: React.FC<HeaderUpperSectionProps> = ({
  hyperlinkList,
  comboboxList,
}) => {
  return (
    <div className="header-upper-section-style">
      <HyperlinkGroup content={hyperlinkList}></HyperlinkGroup>
      <div className="header-upper-section-style__text-container">
        <Text variant="header-upper-section">
          100% Secure delivery without contacting the courier
        </Text>
      </div>
      <HeaderComboboxSection
        comboboxContentList={comboboxList}
      ></HeaderComboboxSection>
    </div>
  );
};

export default HeaderUpperSection;
