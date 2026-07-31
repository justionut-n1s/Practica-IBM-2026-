import "./NavItem.css";
import { Icon, Hyperlink } from "../../atoms";
import { arrowIcon } from "../../../assets/icons";

// Dropdown menu. Props: label = main text, options = list of options shown on click

interface NavItemProps {
  iconSrc?: string;
  textItem: string;
  link: string;
  is_arrow?: boolean;
}

function NavItem({ iconSrc, textItem, link, is_arrow }: NavItemProps) {
  return (
    <div className="nav-item">
      {iconSrc && <Icon src={iconSrc} alt="Icon" size={20} />}
      <Hyperlink message={textItem} link={link}></Hyperlink>
      {is_arrow && (
        <span className="nav-item__arrow">
          <Icon src={arrowIcon} alt="Icon" size={8} />
        </span>
      )}
    </div>
  );
}

export default NavItem;
