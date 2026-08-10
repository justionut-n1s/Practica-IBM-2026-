import React from "react";
import {
  Heading,
  Card,
  Text,
  Hyperlink,
  StarRating,
  PriceTag,
  Button,
  Icon,
  Image,
} from "../../atoms/index";
import { CountdownSection } from "../index";
import { Cart } from "../../../assets/icons/index";
import "./DealsContainer.css";

export interface DealsContainerItem {
  id: number;
  imageSrc: string;
  numericValue: number;
  name: string;
  link: string;
  provider: string;
  rating: number;
  price: string;
  oldPrice?: string;
}

export interface BannerItem {
  id: number;
  imageSrc: string;
  bannerTitle: string;
}

export interface DealsContainerProps {
  productList: DealsContainerItem[];
  bannerList: BannerItem[];
}

const DealsContainer: React.FC<DealsContainerProps> = ({
  productList,
  bannerList,
}) => {
  return (
    <div className="deals-container">
      <div className="deals-container__title">
        <Heading lvl={3}>Deals Of The Day</Heading>
      </div>
      <div className="deals-container__card-container">
        {productList.map(
          ({
            id,
            imageSrc,
            numericValue,
            name,
            link,
            provider,
            rating,
            price,
            oldPrice,
          }) => (
            <div key={id} className="deals-container__card">
              <Image
                src={imageSrc}
                alt="Image"
                className="deals-container__image"
              ></Image>
              <CountdownSection numericValue={numericValue}></CountdownSection>
              <Card className="deals-container__card-content" variant="shadow">
                <Hyperlink
                  message={name}
                  link={link}
                  variant="hyp--deals-container"
                />
                <StarRating rating={rating} />
                <Text variant="provider-deals-container">
                  By
                  <Text
                    type="span"
                    variant="provider-deals-container text--provider-deals-container--span"
                  >
                    {provider}
                  </Text>
                </Text>
                <div className="product-card__footer">
                  <PriceTag price={price} oldPrice={oldPrice} />
                  <Button variant="add-button" onClick={() => {}}>
                    <span className="button-content">
                      <Icon
                        src={Cart}
                        className="icon icon--green"
                        alt="shopping cart"
                        size={13}
                      />
                      Add
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          ),
        )}
      </div>
      <div className="deals-container__banner-container">
        {bannerList.map(({ id, imageSrc, bannerTitle }) => (
          <Card key={id} className="deals-container__banner" variant="flat">
            <Image
              src={imageSrc}
              alt="Banner Image"
              className="deals-container__banner__image"
            ></Image>
            <Text variant="banner-text">{bannerTitle}</Text>
            <Button variant="shop-now-button">Shop Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DealsContainer;
