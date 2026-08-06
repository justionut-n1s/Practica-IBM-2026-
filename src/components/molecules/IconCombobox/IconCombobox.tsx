import React from "react";
import { Icon, Combobox } from "../../atoms/index";
import "./IconCombobox.css";

interface IconComboboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  iconSrc?: string;
  size?: number;
}

const IconCombobox: React.FC<IconComboboxProps> = ({
  options,
  iconSrc,
  size,
}) => {
  return (
    <div className="icon-combobox-style">
      {iconSrc && (
        <Icon
          className="icon icon--gray"
          src={iconSrc}
          alt="Icon"
          size={size}
        ></Icon>
      )}
      <Combobox
        name="name"
        id="id"
        className="combobox-style combobox-style--location"
        selectedOptionLabel="Your Location"
        optionList={options}
      ></Combobox>
    </div>
  );
};

export default IconCombobox;
