import "./NavItem.css";
import { Icon, Hyperlink } from "../../atoms";
import { Chevron } from "../../../assets/icons";

export interface NavItemProps {
  iconSrc?: string;
  iconClassName?: string;
  size?: number;
  textItem: string;
  hyperlinkVariant?: string;
  link: string;
  is_arrow?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavItem({
  iconSrc,
  iconClassName,
  size,
  textItem,
  hyperlinkVariant,
  link,
  is_arrow,
  onClick,
}: NavItemProps) {
  return (
    <div className="nav-item">
      {iconSrc && (
        <Icon src={iconSrc} className={iconClassName} alt="Icon" size={size} />
      )}
      <Hyperlink
        message={textItem}
        variant={hyperlinkVariant}
        link={link}
        onClick={onClick}
      ></Hyperlink>
      {is_arrow && (
        <span className="nav-item__arrow">
          <Icon src={Chevron} alt="Icon" size={8} />
        </span>
      )}
    </div>
  );
}

export default NavItem;
