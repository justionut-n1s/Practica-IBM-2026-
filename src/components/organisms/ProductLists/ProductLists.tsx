import { Heading } from "../../atoms";
import ProductRow from "../../molecules/ProductRow/ProductRow";
import "./ProductLists.css";

interface RowProduct {
  imageSrc: string;
  name: string;
  name_link: string;
  rating: number;
  price: string;
  oldPrice?: string;
}

interface ProductColumn {
  title: string;
  products: RowProduct[];
}

interface ProductListsProps {
  columns: ProductColumn[];
}

function ProductLists({ columns }: ProductListsProps) {
  return (
    <div className="product-lists">
      {columns.map((column) => (
        <div key={column.title} className="product-lists__column">
          <Heading lvl={4}>{column.title}</Heading>
          <div className="product-lists__items">
            {column.products.map((product) => (
              <ProductRow key={product.name} {...product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductLists;
