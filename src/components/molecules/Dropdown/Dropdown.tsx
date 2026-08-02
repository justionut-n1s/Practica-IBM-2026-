import { useState } from "react";
import { Icon, Hyperlink } from "../../atoms";
import { Chevron } from "../../../assets/icons";
import "./Dropdown.css";

interface DropdownProps {
  label: string;
  options: string[];
}

// Dropdown menu. Props: label = main text, options = list of options shown on click

function Dropdown({ label, options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <button
        className={`dropdown__toggle ${isOpen ? "dropdown__toggle--active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hyperlink message={label} link="#" />

        <span
          className={`dropdown__arrow ${isOpen ? "dropdown__arrow--active" : ""}`}
        >
          <Icon src={Chevron} alt="arrow" size={10} />
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((optiune) => (
            <li key={optiune} className="dropdown__item">
              {optiune}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
