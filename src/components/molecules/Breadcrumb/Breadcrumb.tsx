import { Icon } from "../../atoms";
import { Home } from "../../../assets/icons";
import "./Breadcrumb.css";

export interface BreadcrumbTrailItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  trail: BreadcrumbTrailItem[];
}

// Thin bordered bar shown right under the header on inner pages:
// a green "Home" link with a house icon, then "/"-separated trail items.
function Breadcrumb({ trail }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      <a href="/" className="breadcrumb__home">
        <Icon src={Home} alt="" size={16} />
        Home
      </a>
      {trail.map((item) => (
        <span key={item.label} className="breadcrumb__item">
          <span className="breadcrumb__separator">&rsaquo;</span>
          {item.link ? (
            <a href={item.link} className="breadcrumb__link">
              {item.label}
            </a>
          ) : (
            <span className="breadcrumb__current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
