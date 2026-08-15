import React from "react";
import { Combobox, Input } from "../../atoms/index";
import "./SearchBar.css";

interface SearchBarProps {
  comboboxOptions: string[];
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
