import React from "react";
import { Icon, Combobox, Option } from "../../atoms/index";
import { Chevron } from "../../../assets/icons/index";
import "./IconCombobox.css";

interface IconComboboxProps {
  className?: string;
  comboboxClassName?: string;
  options: Option[];
  iconVariant?: string;
  iconSrc?: string;
  size?: number;
  label: string;
}

const IconCombobox: React.FC<IconComboboxProps> = ({
  className = "icon-combobox-style",
  options,
  iconVariant,
  iconSrc,
  size,
  comboboxClassName = "combobox-style combobox-style--location",
  label,
}) => {
  return (
    <div className={className}>
      {iconSrc && (
        <Icon
          className={iconVariant}
          src={iconSrc}
          alt="Icon"
          size={size}
        ></Icon>
      )}
      <Combobox
        name="name"
        id="id"
        className={comboboxClassName}
        selectedOptionLabel={label}
        optionList={options}
      ></Combobox>
      <span className={`icon-combobox-style__chevron`}>
        <Icon
          src={Chevron}
          alt="Chevron"
          size={8}
          className={iconVariant}
        ></Icon>
      </span>
    </div>
  );
};

export default IconCombobox;
