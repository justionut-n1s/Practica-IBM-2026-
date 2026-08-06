import React, { InputHTMLAttributes } from "react";
import "./Input.css";

export type TextInputVariant = "header-input" | "email-input" | "icon-input";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: TextInputVariant;
}

const Input: React.FC<InputProps> = ({
  type,
  className = "",
  ...otherProps
}) => {
  return <input type={type} className={className} {...otherProps}></input>;
};

export default Input;
