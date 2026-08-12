import { Icon } from '../../atoms'
import {
  featurePrices,
  featureDelivery,
  featureDeal,
  featureAssortment,
  featureReturns,
} from "../../../assets/images";
import './IconFeatures.css'

interface Feature {
  icon: string
  title: string
  subtitle: string
}

interface IconFeaturesProps {
  features: Feature[]
}

// Row of icon+text feature items shown above footer
function IconFeatures({ features }: IconFeaturesProps) {
  return (
    <div className="icon-features">
      {features.map((feature) => (
        <div key={feature.title} className="icon-features__item">
          <Icon src={feature.icon} alt={feature.title} size={40} />
          <div className="icon-features__text">
            <p className="icon-features__title">{feature.title}</p>
            <p className="icon-features__subtitle">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export { featurePrices, featureDelivery, featureDeal, featureAssortment,featureReturns }
export default IconFeatures