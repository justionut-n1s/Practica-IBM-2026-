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

interface ProductCardProps {
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
        <Image src={imageSrc} alt={name} width={200} height={200} />
      </div>

      {badgeText && (
        <div className="product-card__badge">
          <Badge text={badgeText} variant={badgeVariant} />
        </div>
      )}
      {/* <Text variant="header2-button" type="p">
        {category}
      </Text> */}
      <Heading lvl={2} children={category}></Heading>

      <Hyperlink
        message={name}
        link={name_link}
        className="product-card__name"
      />

      {/* <Text variant="header2-button" type="p">
        By <span className="provider-name">{provider}</span>
      </Text> */}
      <Heading lvl={2}>
        By
        <Text type="span" variant="provider-name">
          {provider}
        </Text>
      </Heading>

      <StarRating rating={rating} />

      <div className="product-card__footer">
        <PriceTag price={price} oldPrice={oldPrice} />

        <Button variant="add-button" onClick={() => {}}>
          <span className="button-content">
            <Icon src={Cart} alt="shopping cart" size={15} />
            Add
          </span>
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
