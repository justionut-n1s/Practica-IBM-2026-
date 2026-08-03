import { Icon } from "../../atoms";
import "./IconFeatures.css";

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
}

interface IconFeaturesProps {
  features: Feature[];
}

// Row of small icon+text feature items. Props: features = array of {icon, title, subtitle}
function IconFeatures({ features }: IconFeaturesProps) {
  return (
    <div className="icon-features">
      {features.map((feature) => (
        <div key={feature.title} className="icon-features__item">
          <Icon src={feature.icon} alt={feature.title} size={32} />
          <div className="icon-features__text">
            <p className="icon-features__title">{feature.title}</p>
            <p className="icon-features__subtitle">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconFeatures;
