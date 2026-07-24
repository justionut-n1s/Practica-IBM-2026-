import { Button,Icon,Card,Text, Image, Badge, StarRating, PriceTag, Heading } from '../../atoms'
import cart from '../../../assets/icons/cart.svg'
import './ProductCard.css'

interface ProductCardProps {

    imageSrc: string
    name: string
    provider : string
    rating: number
    price: string
    category: string
    oldPrice?: string
    badgeText?: string
    badgeVariant?: 'pink' | 'blue' | 'green' | 'orange'

}

function ProductCard({ imageSrc, name, provider, category, rating, price, oldPrice, badgeText, badgeVariant }: ProductCardProps) {
  return (

    <Card className="product-card">

    <div className="product-card__image">

        <Image
            src={imageSrc}
            alt={name}
            width={200}
            height={200}
        />
    </div>

    {badgeText &&
        <div className="product-card__badge">
            <Badge
                text={badgeText}
                variant={badgeVariant}
            />
        </div>
    }

    <Text variant="header2-button" type="p">{category}</Text>

    <Heading lvl={4}>{name}</Heading>

    <Text variant="header2-button" type="p">By <span className="provider-name">{provider}</span></Text>

    <StarRating rating={rating} />

    <Text variant="header2-button" type="p">By {provider}</Text>

    <div className="product-card__footer">
        <PriceTag
            price={price}
            oldPrice={oldPrice}
        />
        
        <Button variant="add-button" onClick={() => {}}>
            <span className="button-content">
                <Icon src={cart} alt="shopping cart" size={15} />
                Add
            </span>
        </Button>
        
    </div>

</Card>
  )
}

export default ProductCard
