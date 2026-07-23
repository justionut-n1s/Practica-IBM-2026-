import './PriceTag.css';

export type PriceTagProps = {
    price: string;
    oldPrice?: string;
};

export default function PriceTag({ price, oldPrice }: PriceTagProps) {
    return (
        <div className="pricetag">
            <p className="pricetag__price">{price}</p>
            {oldPrice && <p className="pricetag__old-price">{oldPrice}</p>}
        </div>
  );
}