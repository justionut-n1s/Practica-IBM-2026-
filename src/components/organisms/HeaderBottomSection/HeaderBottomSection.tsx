import React from "react";
import { Option } from "../../atoms/index";
import {
  IconCombobox,
  Dropdown,
  DropdownProps,
  NavItem,
  NavItemProps,
  CallCenterContainer,
} from "../../molecules/index";
import { Headset, Blaze, Browse } from "../../../assets/icons/index";
import { translations } from "../../../translations/translations";
import { Page } from "../../../types";
import "./HeaderBottomSection.css";

interface NavItemConfig extends NavItemProps {
  type: "navitem";
  page?: Page;
}

interface DropdownConfig extends DropdownProps {
  type: "dropdown";
  page?: Page;
}

export type NavGroupConfig = NavItemConfig | DropdownConfig;

interface HeaderBottomSectionProps {
  optionList: Option[];
  navItemList: NavGroupConfig[];
  onNavigate: (page: Page) => void;
}

const HeaderBottomSection: React.FC<HeaderBottomSectionProps> = ({
  optionList,
  navItemList,
  onNavigate,
}) => {
  const translation = translations.en.headerBottomSection;
  return (
    <div className="header-bottom-section-style">
      <IconCombobox
        className="icon-combobox-style icon-combobox-style--green"
        options={optionList}
        iconVariant="icon--white"
        iconSrc={Browse}
        size={16}
        label={translation.comboboxLabel}
        comboboxClassName="combobox-style combobox-style--location combobox-style--location--green"
      ></IconCombobox>
      <NavItem
        iconSrc={Blaze}
        iconClassName="icon--green"
        size={20}
        textItem={translation.deals}
        hyperlinkVariant="hyp"
        link=""
        is_arrow={false}
      ></NavItem>
      <nav className="header-bottom-section-style__navgroup">
        {navItemList.map((item) => {
          if (item.type === "navitem") {
            return (
              <NavItem
                key={item.textItem}
                iconSrc={item.iconSrc}
                iconClassName={item.iconClassName}
                size={item.size}
                textItem={item.textItem}
                hyperlinkVariant={item.hyperlinkVariant}
                link={item.link}
                is_arrow={item.is_arrow}
                onClick={
                  item.page
                    ? (e) => {
                        e.preventDefault();
                        onNavigate(item.page!);
                      }
                    : undefined
                }
              ></NavItem>
            );
          } else if (item.type === "dropdown") {
            return (
              <Dropdown
                key={item.label}
                label={item.label}
                labelVariant={item.labelVariant}
                chevronVariant={item.chevronVariant}
                options={item.options}
                link={item.link}
                onClick={
                  item.page
                    ? (e) => {
                        e.preventDefault();
                        onNavigate(item.page!);
                      }
                    : undefined
                }
              ></Dropdown>
            );
          }
        })}
      </nav>
      <CallCenterContainer
        iconSrc={Headset}
        primaryTextContent="1900 - 888"
        secondaryTextContent={translation.callCenterText}
      ></CallCenterContainer>
    </div>
  );
};

export default HeaderBottomSection;
