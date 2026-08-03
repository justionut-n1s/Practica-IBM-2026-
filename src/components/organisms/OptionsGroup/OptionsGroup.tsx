import React from "react";
import { NavItem, NavItemProps } from "../../molecules/index";
import "./OptionsGroup.css";

export interface OptionsGroupItem extends NavItemProps {
  id: number;
}

export interface OptionsGroupProps {
  optionsList: OptionsGroupItem[];
}

const OptionsGroup: React.FC<OptionsGroupProps> = ({ optionsList }) => {
  return (
    <div className="options-group-style">
      {optionsList.map(({ id, ...otherProps }) => (
        <NavItem
          key={id}
          iconClassName="icon icon--black"
          size={24}
          hyperlinkClassName="hyp hyp--header-mid-section"
          {...otherProps}
        ></NavItem>
      ))}
    </div>
  );
};

export default OptionsGroup;
