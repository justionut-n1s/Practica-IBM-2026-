import Icon from "../Icon/Icon";
import { starFullIcon } from "../../../assets/icons";
import { starEmptyIcon } from "../../../assets/icons";
import "./StarRating.css";

// Displays 5 stars (rounded rating) + exact number in parentheses. Props: rating (e.g. 4.6)

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  const ratingRotunjit = Math.round(rating);
  const pozitii = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {pozitii.map((pozitie) => {
        const sursa = pozitie <= ratingRotunjit ? starFullIcon : starEmptyIcon;
        return <Icon key={pozitie} src={sursa} alt="stea" size={16} />;
      })}
      <span className="star-rating__number">({rating})</span>
    </div>
  );
}

export default StarRating;
