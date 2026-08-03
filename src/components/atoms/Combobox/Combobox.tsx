import React from "react";
import "./Combobox.css";

export interface ComboboxProps {
  name: string;
  id: string;
  className: string;
  selectedOptionLabel: string;
  optionList: string[];
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
      <option value="" selected>
        {selectedOptionLabel}
      </option>
      {optionList.map((row, index) => (
        <option>{optionList[index]}</option>
      ))}
    </select>
  );
};

export default Combobox;
