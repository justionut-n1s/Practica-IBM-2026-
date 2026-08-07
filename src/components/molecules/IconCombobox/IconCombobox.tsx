import React, { useState } from "react";
import { Icon, Combobox } from "../../atoms/index";
import { Chevron } from "../../../assets/icons/index";
import "./IconCombobox.css";

interface IconComboboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  comboboxClassName?: string;
  options: string[];
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

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
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onClick={toggleDropdown}
      ></Combobox>
      <span
        className={`icon-combobox-style__chevron ${isOpen ? "icon-combobox-style__chevron--active" : ""}`}
      >
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
