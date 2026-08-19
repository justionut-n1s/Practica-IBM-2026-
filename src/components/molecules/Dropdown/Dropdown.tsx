import { useState } from "react";
import { Icon, Hyperlink } from "../../atoms";
import { Chevron } from "../../../assets/icons";
import "./Dropdown.css";

export interface DropdownProps {
  label: string;
  labelVariant?: string;
  chevronVariant?: string;
  options: string[];
  link: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function Dropdown({
  label,
  labelVariant,
  chevronVariant,
  options,
  link,
  onClick,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <button
        className={`dropdown__toggle ${isOpen ? "dropdown__toggle--active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hyperlink
          variant={labelVariant}
          message={label}
          link={link}
          onClick={onClick}
        />

        <span
          className={`dropdown__arrow ${isOpen ? "dropdown__arrow--active" : `dropdown__arrow--${chevronVariant}`}`}
        >
          <Icon src={Chevron} alt="arrow" size={10} />
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li key={option} className="dropdown__item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
