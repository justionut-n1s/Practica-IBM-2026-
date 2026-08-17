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
import { translations } from "../../../translations/translations";
import "./DealsContainer.css";

export interface DealsContainerItem {
  id: number;
  imageSrc: string;
  targetDate: Date | string | number;
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
}

const DealsContainer: React.FC<DealsContainerProps> = ({ productList }) => {
  const translation = translations.en.dealsContainer;

  return (
    <div className="deals-container">
      <div className="deals-container__title">
        <Heading lvl={3}>{translation.title}</Heading>
      </div>
      <div className="deals-container__card-container">
        {productList.map(
          ({
            id,
            imageSrc,
            targetDate,
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
              <CountdownSection targetDate={targetDate}></CountdownSection>
              <Card className="deals-container__card-content" variant="shadow">
                <Hyperlink
                  message={name}
                  link={link}
                  variant="hyp--deals-container"
                />
                <StarRating rating={rating} />
                <Text variant="provider-text">
                  {translation.by}
                  <Text
                    type="span"
                    variant="provider-text text--provider-text--span"
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
                      {translation.add}
                    </span>
                  </Button>
                </div>
              </Card>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default DealsContainer;
