import React from "react";
import {
  Card,
  Heading,
  Hyperlink,
  Button,
  Image,
  Text,
  Icon,
} from "../../atoms/index";
import { Chevron } from "../../../assets/icons/index";
import "./CategoryCarousel.css";

export interface CategoryCarouselItem {
  id: number;
  imageSrc: string;
  cardLabel: string;
}

export interface CategoryCarouselProps {
  cardList: CategoryCarouselItem[];
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ cardList }) => {
  return (
    <div className="category-carousel">
      <div className="category-carousel__title-container">
        <div className="category-carousel__title-container__text-container">
          <Heading lvl={3}>Shop by Categories</Heading>
          <Hyperlink
            variant="hyp--category-carousel"
            message="All Categories"
            link=""
          ></Hyperlink>
        </div>
        <div className="category-carousel__title-container__button-container">
          <Button variant="arrow-button-left">
            <Icon
              src={Chevron}
              alt="Chevron"
              size={16}
              className="icon--gray"
            ></Icon>
          </Button>
          <Button variant="arrow-button-right">
            <Icon
              src={Chevron}
              alt="Chevron"
              size={16}
              className="icon--gray"
            ></Icon>
          </Button>
        </div>
      </div>
      <div className="category-carousel__card-container">
        {cardList.map(({ id, imageSrc, cardLabel }) => (
          <Card key={id} className="category-carousel__card" variant="flat">
            <Image
              className="category-carousel__card__image"
              src={imageSrc}
              alt="Card Image"
            ></Image>
            <Text variant="category-card-text">{cardLabel}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
