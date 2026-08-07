import React, { SelectHTMLAttributes } from "react";
import "./Combobox.css";

export interface ComboboxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  id: string;
  className: string | undefined;
  selectedOptionLabel: string;
  optionList: string[];
}

const Combobox: React.FC<ComboboxProps> = ({
  name,
  id,
  className,
  selectedOptionLabel,
  optionList,
  ...otherProps
}) => {
  return (
    <select name={name} id={id} className={className}>
      <option className="combobox-style-option" value="" selected>
        {selectedOptionLabel}
      </option>
      {optionList.map((row, index) => (
        <option className="combobox-style-option">{optionList[index]}</option>
      ))}
    </select>
  );
};

export default Combobox;
