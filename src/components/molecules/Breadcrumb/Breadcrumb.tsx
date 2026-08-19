import { Icon } from "../../atoms";
import { Blaze } from "../../../assets/icons/index";
import { translations } from "../../../translations/translations";
import "./Breadcrumb.css";

export interface BreadcrumbTrailItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  trail: BreadcrumbTrailItem[];
}

function Breadcrumb({ trail }: BreadcrumbProps) {
  const breadcrumbTranslate = translations.en.breadcrumb;
  return (
    <nav className="breadcrumb">
      <a href="/" className="breadcrumb__home">
        <Icon src={Blaze} alt="" size={16} className="icon--green" />
        {breadcrumbTranslate.home}
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
