import { useState } from "react";
import {Icon, Hyperlink } from '../../atoms'
import arrow from '../../../assets/icons/arrow.png'
import './Dropdown.css'

interface DropdownProps{
    label : string
    options : string[]
}

// Meniu tip dropdown. Props: label = textul principal, options = lista de optiuni afisate la click

function Dropdown ({label, options}: DropdownProps) {
    
    const [isOpen, setIsOpen] = useState(false)
    return(

        <div className="dropdown">

            <button className={`dropdown__toggle ${isOpen ? 'dropdown__toggle--active' : ''}`} onClick={() => setIsOpen(!isOpen)}>

                <Hyperlink message={label} link="#" />

                <span className={`dropdown__arrow ${isOpen ? 'dropdown__arrow--active' : ''}`}>
                    <Icon src={arrow} alt="arrow" size={10} />
                </span>

            </button>

            {isOpen &&(

                <ul className="dropdown__menu">

                    {options.map((optiune) =>(
                        <li key={optiune} className="dropdown__item">
                            {optiune}
                        </li>
                    ))}

                </ul>
            )}
        </div>

    )
}

export default Dropdown