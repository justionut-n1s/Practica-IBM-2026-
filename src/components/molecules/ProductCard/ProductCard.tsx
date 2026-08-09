import {
  Button,
  Icon,
  Card,
  Text,
  Image,
  Badge,
  StarRating,
  PriceTag,
  Heading,
  Hyperlink,
} from "../../atoms";
import { Cart } from "../../../assets/icons";
import "./ProductCard.css";

export interface ProductCardProps {
  imageSrc: string;
  name: string;
  provider: string;
  rating: number;
  price: string;
  category: string;
  oldPrice?: string;
  badgeText?: string;
  name_link: string;
  badgeVariant?: "pink" | "blue" | "green" | "orange";
}

function ProductCard({
  imageSrc,
  name,
  provider,
  category,
  rating,
  price,
  oldPrice,
  badgeText,
  badgeVariant,
  name_link,
}: ProductCardProps) {
  return (
    <Card className="product-card">
      <div className="product-card__image">
        <Image src={imageSrc} alt={name} width={96} height={96} />
      </div>

      {badgeText && (
        <div className="product-card__badge">
          <Badge text={badgeText} variant={badgeVariant} />
        </div>
      )}
      {/* <Heading lvl={4} children={category}></Heading> */}
      <Text variant="category-text">{category}</Text>
      <Hyperlink message={name} link={name_link} variant="product-card__name" />

      <StarRating rating={rating} />

      <Text variant="provider-text">
        By
        <Text type="span" variant="provider-text text--provider-text--span">
          {provider}
        </Text>
      </Text>

      <div className="product-card__footer">
        <PriceTag price={price} oldPrice={oldPrice} />

        <Button variant="add-button" onClick={() => {}}>
          <span className="button-content">
            <Icon
              src={Cart}
              className="icon icon--green"
              alt="shopping cart"
              size={13}
            />
            Add
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
