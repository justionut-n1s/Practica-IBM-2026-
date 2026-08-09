import React from "react";
import "./Text.css";

export interface TextProps {
  children: React.ReactNode;
  variant:
    | "header-upper-section"
    | "header-upper-section--span"
    | "footer-text"
    | "title text--title--primary-title"
    | "title text--title--secondary-title"
    | "title text--title--hero-title"
    | "title text--title--hero-subtitle"
    | "checkbox-form-title"
    | "countdown-text"
    | "countdown-timeunit"
    | "header3-support-center-number"
    | "header3-support-center-text"
    | "provider-text"
    | "category-text"
    | "provider-text text--provider-text--span";
  type?: "p" | "span" | "label";
  key?: number;
}

const Text: React.FC<TextProps> = ({ children, variant, type = "p" }) => {
  const TagName = type;

  return <TagName className={`text text--${variant}`}>{children}</TagName>;
};

export default Text;
