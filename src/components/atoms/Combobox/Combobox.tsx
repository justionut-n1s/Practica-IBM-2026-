import React, { SelectHTMLAttributes } from "react";
import "./Combobox.css";

export interface Option {
  id: number;
  label: string;
}

export interface ComboboxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  id: string;
  className: string | undefined;
  selectedOptionLabel: string;
  optionList: Option[];
}

const Combobox: React.FC<ComboboxProps> = ({
  name,
  id,
  className,
  selectedOptionLabel,
  optionList,
}) => {
  return (
    <select name={name} id={id} className={className}>
      <option className="combobox-style-option" value="" selected>
        {selectedOptionLabel}
      </option>
      {optionList.map((option) => (
        <option key={option.id} value="value" className="combobox-style-option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Combobox;
