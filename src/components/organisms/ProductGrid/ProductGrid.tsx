import ProductCard from "../../molecules/ProductCard/ProductCard";
import "./ProductGrid.css";

interface Product {
  imageSrc: string;
  name: string;
  name_link: string;
  category: string;
  provider: string;
  rating: number;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeVariant?: "pink" | "blue" | "green" | "orange";
}

interface ProductGridProps {
  products: Product[];
}

// Grid of ProductCard items. Props: products = array of product data to display
function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}

export default ProductGrid;
