import React from "react";
import { Heading, Hyperlink, HyperlinkProps } from "../../atoms/index";
import { ProductCard, ProductCardProps } from "../../molecules/index";
import { translations } from "../../../translations/translations";
import "./ProductGrid.css";

interface HyperlinkItem extends HyperlinkProps {
  key: number;
}

export interface ProductGridItem extends ProductCardProps {
  id: number;
}

export interface ProductGridProps {
  productCardList: ProductGridItem[];
}

const hyperlinkConfig: HyperlinkItem[] = [
  { key: 1, message: "All", link: "" },
  { key: 2, message: "Milk & Dairy", link: "" },
  { key: 3, message: "Coffee & Tea", link: "" },
  { key: 4, message: "Pet Food", link: "" },
  { key: 5, message: "Meat", link: "" },
  { key: 6, message: "Vegetables", link: "" },
  { key: 7, message: "Fruits", link: "" },
];

const ProductGrid: React.FC<ProductGridProps> = ({ productCardList }) => {
  const translation = translations.en.productGrid;
  return (
    <div className="product-grid-container">
      <div className="product-grid-container__title">
        <Heading lvl={3}>{translation.title}</Heading>
        <nav className="product-grid-container__nav">
          {hyperlinkConfig.map(({ key, ...otherProps }) => (
            <Hyperlink
              key={key}
              variant="hyp--product-grid"
              {...otherProps}
            ></Hyperlink>
          ))}
        </nav>
      </div>
      <div className="product-grid-container__grid">
        {productCardList.map(({ id, ...otherProps }) => (
          <ProductCard key={id} {...otherProps}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
