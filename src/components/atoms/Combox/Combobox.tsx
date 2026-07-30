import React from 'react'
import './Combobox.css'

interface ComboboxProps {

    name: string;
    id: string;

}

const Combobox: React.FC<ComboboxProps> = ({ name, id }) => {

    return (
        <select name={name} id={id} className='combobox-style'>
            <option value="" selected>All categories</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
        </select>
    );

}

export default Combobox