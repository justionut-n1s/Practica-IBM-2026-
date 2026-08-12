import { Card, Image, Hyperlink, StarRating, PriceTag } from "../../atoms";
import "./ProductRow.css";

interface ProductRowProps {
  imageSrc: string;
  name: string;
  name_link: string;
  rating: number;
  price: string;
  oldPrice?: string;
}

function ProductRow({
  imageSrc,
  name,
  name_link,
  rating,
  price,
  oldPrice,
}: ProductRowProps) {
  return (
    <Card className="product-row">
      <div className="product-row__image">
        <Image src={imageSrc} alt={name} width={80} height={80} />
      </div>

      <div className="product-row__content">
        <Hyperlink
          message={name}
          link={name_link}
          className="product-row__name"
        />

        <StarRating rating={rating} />

        <PriceTag price={price} oldPrice={oldPrice} />
      </div>
    </Card>
  );
}

export default ProductRow;
