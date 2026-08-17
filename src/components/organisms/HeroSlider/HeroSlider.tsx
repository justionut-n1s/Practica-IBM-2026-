import React, { useRef, useEffect, useState } from "react";
import { Text } from "../../atoms/index";
import { Form } from "../../molecules/index";
import "./HeroSlider.css";

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
  backgroundImg?: string;
}
export interface HeroSliderProps {
  slideList: Slide[];
  intervalMs?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slideList, intervalMs }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const length = slideList.length;

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [index, slideList]);

  const startTimer = () => {
    stopTimer();
    timerRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % length);
    }, intervalMs);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i: number) => {
    setIndex(i);
  };

  const handleSubmit = (email: string) => {
    console.log("Subscribed:", email, "for slide", slideList[index].id);
    startTimer();
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="Promotional slides"
    >
      {slideList.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slider__slide ${i === index ? "hero-slider__slide--active" : ""}`}
          style={{ backgroundImage: `url(${s.backgroundImg})` }}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${length}`}
        >
          <div className="hero-slider__slide-overlay">
            <div className="hero-slider__content">
              <Text variant="title text--title--hero-title">{s.title}</Text>
              <Text variant="title text--title--hero-subtitle">
                {s.subtitle}
              </Text>
              <Form
                inputClassName="text-input text-input--email-input"
                placeholder={s.placeholder}
                buttonText={s.buttonText}
                onFormSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      ))}

      <div
        className="hero-slider__pagination"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slideList.map((_, i) => (
          <button
            key={i}
            className={`hero-slider__dot ${i === index ? "hero-slider__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );

  {
    /*    <div className="hero-slider__content">
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
       </div> */
  }
};

export default HeroSlider;
