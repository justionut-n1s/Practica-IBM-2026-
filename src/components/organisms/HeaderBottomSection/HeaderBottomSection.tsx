import React from "react";
import {
  IconCombobox,
  Dropdown,
  DropdownProps,
  NavItem,
  NavItemProps,
  CallCenterContainer,
} from "../../molecules/index";
import { Headset, Blaze, Browse } from "../../../assets/icons/index";
import { Page } from "../../../types";
import "./HeaderBottomSection.css";

interface NavItemConfig extends NavItemProps {
  type: "navitem";
  page?: Page;
}

interface DropdownConfig extends DropdownProps {
  type: "dropdown";
}

type NavGroupConfig = NavItemConfig | DropdownConfig;

const navItems: NavGroupConfig[] = [
  {
    type: "navitem",
    textItem: "Home",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
    page: "home",
  },
  {
    type: "navitem",
    textItem: "Shop",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
    page: "shop",
  },
  {
    type: "navitem",
    textItem: "About",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
    page: "about",
  },
  {
    type: "navitem",
    textItem: "Contact",
    hyperlinkVariant: "hyp",
    link: "",
    is_arrow: false,
    page: "contact",
  },
  {
    type: "dropdown",
    label: "Vendors",
    options: ["option1", "option2", "option3"],
  },
  {
    type: "dropdown",
    label: "Mega menu",
    options: ["option1", "option2", "option3"],
  },
  {
    type: "dropdown",
    label: "Blog",
    options: ["option1", "option2", "option3"],
  },
];

const optionList1: string[] = ["value1", "value2", "value3", "value4"];

interface HeaderBottomSectionProps {
  optionList?: string[];
  onNavigate: (page: Page) => void;
}

const HeaderBottomSection: React.FC<HeaderBottomSectionProps> = ({
  optionList,
  onNavigate,
}) => {
  return (
    <div className="header-bottom-section-style">
      <IconCombobox
        className="icon-combobox-style icon-combobox-style--green"
        options={optionList1}
        iconVariant="icon--white"
        iconSrc={Browse}
        size={16}
        label="Browse All Categories"
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
        {navItems.map((item) => {
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
        secondaryTextContent="24/7 Support Center"
      ></CallCenterContainer>
    </div>
  );
};

export default HeaderBottomSection;
