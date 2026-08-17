import React from "react";
import { Heading, Card } from "../../atoms/index";
import { ProductRow } from "../../molecules/index";
import { translations } from "../../../translations/translations";
import "./NewProductPanel.css";

interface NewProductPanelItem {
  id: number;
  imageSrc: string;
  name: string;
  name_link: string;
  rating: number;
  price: string;
}

interface NewProductPanelProps {
  productRowList: NewProductPanelItem[];
}

const NewProductPanel: React.FC<NewProductPanelProps> = ({
  productRowList,
}) => {
  const translation = translations.en.newProductsPanel;
  return (
    <Card className="new-product-panel">
      <div className="new-product-panel__title">
        <Heading lvl={4}>{translation.title}</Heading>
      </div>
      <div className="new-product-panel__card-container">
        {productRowList.map(({ id, ...otherProps }) => (
          <ProductRow
            key={id}
            className="new-product-panel__card-container__product-row"
            cardVariant="flat"
            size={20}
            {...otherProps}
          ></ProductRow>
        ))}
      </div>
    </Card>
  );
};

export default NewProductPanel;
