import React from "react";
import "./button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant:
    | "subscribe-button"
    | "add-button"
    | "shop-now-button"
    | "filter-button";
  onClick: () => void;
};

export default function Button({ children, variant, onClick }: ButtonProps) {
  const TagName = "button";

  return (
    <TagName className={`button button--${variant}`} onClick={onClick}>
      {children}
    </TagName>
  );
}
