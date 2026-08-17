import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Heading,
  Hyperlink,
  Button,
  Text,
  Image,
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
  visibleCount?: number;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  cardList,
  visibleCount = 8,
}) => {
  const total = cardList.length;
  const maxIndex = Math.max(0, total - visibleCount);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setCardWidth(width / visibleCount);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handlePrev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };
  const handleNext = () => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  const translateX = -(index * cardWidth);

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
          <Button
            variant="arrow-button-left"
            onClick={handlePrev}
            disabled={index === 0}
          >
            <Icon
              src={Chevron}
              alt="Chevron"
              size={16}
              className="icon--gray"
            ></Icon>
          </Button>
          <Button
            variant="arrow-button-right"
            onClick={handleNext}
            disabled={index === maxIndex}
          >
            <Icon
              src={Chevron}
              alt="Chevron"
              size={16}
              className="icon--gray"
            ></Icon>
          </Button>
        </div>
      </div>
      <div className="category-carousel-viewport" ref={containerRef}>
        <div
          className="category-carousel__track"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${(total * 100) / visibleCount}%`,
          }}
        >
          {cardList.map((cat) => (
            <Card
              key={cat.id}
              className="category-carousel__card"
              variant="flat"
            >
              <Image
                className="category-carousel__card__image"
                src={cat.imageSrc}
                alt="Card Image"
              ></Image>
              <Text variant="category-card-text">{cat.cardLabel}</Text>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  {
    /* // return (
  //   <div className="category-carousel">
  //     <div className="category-carousel__title-container">
  //       <div className="category-carousel__title-container__text-container">
  //         <Heading lvl={3}>Shop by Categories</Heading>
  //         <Hyperlink
  //           variant="hyp--category-carousel"
  //           message="All Categories"
  //           link=""
  //         ></Hyperlink>
  //       </div>
  //       <div className="category-carousel__title-container__button-container">
  //         <Button variant="arrow-button-left">
  //           <Icon
  //             src={Chevron}
  //             alt="Chevron"
  //             size={16}
  //             className="icon--gray"
  //           ></Icon>
  //         </Button>
  //         <Button variant="arrow-button-right">
  //           <Icon
  //             src={Chevron}
  //             alt="Chevron"
  //             size={16}
  //             className="icon--gray"
  //           ></Icon>
  //         </Button>
  //       </div>
  //     </div>
  //     <div className="category-carousel__card-container">
  //       {cardList.map(({ id, imageSrc, cardLabel }) => (
  //         <Card key={id} className="category-carousel__card" variant="flat">
  //           <Image
  //             className="category-carousel__card__image"
  //             src={imageSrc}
  //             alt="Card Image"
  //           ></Image>
  //           <Text variant="category-card-text">{cardLabel}</Text>
  //         </Card>
  //       ))}
  //     </div>
  //   </div>
  // ); */
  }
};

export default CategoryCarousel;
