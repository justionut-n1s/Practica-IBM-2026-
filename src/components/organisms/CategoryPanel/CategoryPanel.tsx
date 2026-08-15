import React from "react";
import { Heading, Card, Image, Text } from "../../atoms/index";
import "./CategoryPanel.css";

interface CardList {
  id: number;
  imageSrc: string;
  alt: string;
  text: string;
  itemNumber: number;
}

interface CategoryPanelProps {
  cardList: CardList[];
}

const CategoryPanel: React.FC<CategoryPanelProps> = ({ cardList }) => {
  return (
    <Card className="category-panel">
      <div className="category-panel__title">
        <Heading lvl={4}>Category</Heading>
      </div>
      <div className="category-panel__card-list">
        {cardList.map(({ id, imageSrc, alt, text, itemNumber }) => (
          <Card
            key={id}
            className="category-panel__card-list__card"
            variant="flat"
          >
            <Image
              className="category-panel__card-list__card__image"
              src={imageSrc}
              alt={alt}
            ></Image>
            <Text variant="left-category-card-text">{text}</Text>
            <div className="category-panel__card-list__card__count-item">
              {itemNumber}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default CategoryPanel;
