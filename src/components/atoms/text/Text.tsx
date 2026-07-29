import React from "react";
import "./text.css";

type TextProps = {
  children: React.ReactNode;
  variant:
    | "header1"
    | "header2-button"
    | "header2-input-and-dropdown"
    | "header3-dropdown"
    | "text--title--primary-title"
    | "text--title--secondary-title";
  type: "p" | "span" | "label";
};

export default function Text({ children, variant, type = "p" }: TextProps) {
  const TagName = type;

  return <TagName className={`text text--${variant}`}>{children}</TagName>;
}
