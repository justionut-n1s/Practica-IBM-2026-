import { Heading } from "../../atoms";
import { ProductRow } from "../../molecules";
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

// Multi-column product lists (e.g. Top Selling, Trending). Props: columns = array of {title, products}
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
