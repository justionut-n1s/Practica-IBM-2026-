import React from "react";
import { Heading, Hyperlink, HyperlinkProps } from "../../atoms/index";
import { ProductCard, ProductCardProps } from "../../molecules/index";
import { translations } from "../../../translations/translations";
import "./ProductGrid.css";

interface HyperlinkItem extends HyperlinkProps {
  id: number;
}

export interface ProductGridItem extends ProductCardProps {
  id: number;
}

export interface ProductGridProps {
  productCardList: ProductGridItem[];
  hyperlinkList: HyperlinkItem[];
}

const ProductGrid: React.FC<ProductGridProps> = ({
  productCardList,
  hyperlinkList,
}) => {
  const translation = translations.en.productGrid;
  return (
    <div className="product-grid-container">
      <div className="product-grid-container__title">
        <Heading lvl={3}>{translation.title}</Heading>
        <nav className="product-grid-container__nav">
          {hyperlinkList.map(({ id, ...otherProps }) => (
            <Hyperlink
              key={id}
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
