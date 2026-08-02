import "./NavItem.css";
import { Icon, Hyperlink } from "../../atoms";
import { Chevron } from "../../../assets/icons";

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
          <Icon src={Chevron} alt="Icon" size={8} />
        </span>
      )}
    </div>
  );
}

export default NavItem;
