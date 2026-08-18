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
}

export type NavGroupConfig = NavItemConfig | DropdownConfig;

// const navItems: NavGroupConfig[] = [
//   {
//     type: "dropdown",
//     label: "Home",
//     labelVariant: "hyp--span",
//     chevronVariant: "green",
//     options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
//   },
//   {
//     type: "navitem",
//     textItem: "About",
//     hyperlinkVariant: "hyp",
//     link: "",
//     is_arrow: false,
//   },
//   {
//     type: "dropdown",
//     label: "Shop",
//     options: ["Snacks", "Fruits", "Vegetables"],
//   },
//   {
//     type: "dropdown",
//     label: "Vendors",
//     options: ["NestFood", "Hodo Foods", "Old El Paso"],
//   },
//   {
//     type: "dropdown",
//     label: "Mega menu",
//     options: ["Popular Products", "Deals Of The Day", "Shop by Categories"],
//   },
//   {
//     type: "dropdown",
//     label: "Blog",
//     options: [
//       "Best Recipes in 2026",
//       "Best Juices in 2026",
//       "Best Wines in 2026",
//     ],
//   },
//   {
//     type: "dropdown",
//     label: "Pages",
//     options: ["About", "Shop", "Contact"],
//   },
//   {
//     type: "navitem",
//     textItem: "Contact",
//     hyperlinkVariant: "hyp",
//     link: "",
//     is_arrow: false,
//   },
// ];

// const optionList1 = [
//   { id: 1, label: "Milk & Dairy" },
//   { id: 2, label: "Fruits & Vegetables" },
//   { id: 3, label: "Baking Material" },
//   { id: 4, label: "Bread & Juice" },
//   { id: 5, label: "Snacks" },
// ];

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
        iconClassName="icon icon--green"
        size={20}
        textItem="Deals"
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
