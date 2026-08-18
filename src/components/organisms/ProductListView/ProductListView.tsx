import { ProductRow } from "../../molecules";
import "./ProductListView.css";

interface Product {
  imageSrc: string;
  name: string;
  name_link: string;
  rating: number;
  price: string;
  oldPrice?: string;
}

interface ProductListViewProps {
  products: Product[];
}

// Same idea as ProductGrid, but stacked vertically using ProductRow instead of ProductCard.
function ProductListView({ products }: ProductListViewProps) {
  return (
    <div className="product-list-view">
      {products.map((product) => (
        <ProductRow key={product.name} {...product} />
      ))}
    </div>
  );
}

export default ProductListView;
