import Icon from "../Icon/Icon";
import { starFullIcon } from "../../../assets/icons";
import { starEmptyIcon } from "../../../assets/icons";
import "./StarRating.css";

export interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  const roundedRating = Math.round(rating);
  const positions = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {positions.map((position) => {
        const source = position <= roundedRating ? starFullIcon : starEmptyIcon;
        return <Icon key={position} src={source} alt="Star" size={12} />;
      })}
      <span className="star-rating__number">({rating})</span>
    </div>
  );
}

export default StarRating;
