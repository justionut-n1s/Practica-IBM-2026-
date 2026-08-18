import React from "react";
import { Combobox, Input, Option } from "../../atoms/index";
import "./SearchBar.css";

interface SearchBarProps {
  comboboxOptions: Option[];
  inputClassName: string;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  comboboxOptions,
  inputClassName,
  placeholder,
}) => {
  return (
    <div className="search-bar">
      <Combobox
        name="name"
        id="id"
        selectedOptionLabel="All categories"
        className="combobox-style"
        optionList={comboboxOptions}
      ></Combobox>
      <Input
        type="text"
        className={inputClassName}
        placeholder={placeholder}
      ></Input>
    </div>
  );
};

export default SearchBar;
