import React from "react";
import { Text } from "../../atoms/index";
import { Form } from "../../molecules/index";
import "./HeroSlider.css";

export interface HeroSliderProps {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonLabel: string;
  backgroundImg?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  title,
  subtitle,
  placeholder,
  buttonLabel,
}) => {
  return (
    <div className="hero-slider">
      <div className="hero-slider__slide">
        <div className="hero-slider__content">
          <Text variant="title text--title--hero-title">{title}</Text>
          <Text variant="title text--title--hero-subtitle">{subtitle}</Text>
          <Form
            inputClassName="text-input text-input--email-input"
            placeholder={placeholder}
            buttonText={buttonLabel}
          ></Form>
        </div>
      </div>
      <div className="hero-slider__pagination">
        <div className="hero-slider__dot hero-slider__dot--active"></div>
        <div className="hero-slider__dot"></div>
      </div>
    </div>
  );
};

export default HeroSlider;
