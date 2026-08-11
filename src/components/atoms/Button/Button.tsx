import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

export type ButtonVariant =
  | "subscribe-button"
  | "add-button"
  | "shop-now-button"
  | "filter-button"
  | "arrow-button-left"
  | "arrow-button-right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...otherProps
}: ButtonProps) => {
  return (
    <button className={`button button--${variant}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
