import {
  Card,
  CardVariant,
  Image,
  Hyperlink,
  StarRating,
  PriceTag,
} from "../../atoms/index";
import "./ProductRow.css";

interface ProductRowProps {
  className?: string;
  cardVariant?: CardVariant;
  imageSrc: string;
  name: string;
  size?: number;
  name_link: string;
  rating: number;
  price: string;
  oldPrice?: string;
}

function ProductRow({
  className = "product-row",
  cardVariant = "shadow",
  imageSrc,
  name,
  size = 80,
  name_link,
  rating,
  price,
  oldPrice,
}: ProductRowProps) {
  return (
    <Card className={className} variant={cardVariant}>
      <div className="product-row__image">
        <Image src={imageSrc} alt={name} width={size} height={size} />
      </div>
      <div className="product-row__content">
        <Hyperlink
          message={name}
          link={name_link}
          variant="product-row__name"
        />
        <StarRating rating={rating} />
        <PriceTag price={price} oldPrice={oldPrice} />
      </div>
    </Card>
  );
}

export default ProductRow;
