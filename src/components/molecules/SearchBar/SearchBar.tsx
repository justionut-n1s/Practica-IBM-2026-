import React from "react"
import { Combobox, Input } from '/src/components/index.ts'
import './SearchBar.css'

interface SearchBarProps {

    name: string;
    id: string;
    inputClassName: string;
    placeholder: string;

}

const SearchBar: React.FC<SearchBarProps> = ({ name, id, inputClassName, placeholder }) => {

    return (
        <div className="search-bar">
            <Combobox name={name} id={id}></Combobox>
            <Input type="text" className={inputClassName} placeholder={placeholder}></Input>
        </div>
    );

}

export default SearchBar