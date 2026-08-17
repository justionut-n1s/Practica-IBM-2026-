import React, { useState, SubmitEvent } from "react";
import { Input, Button } from "../../atoms/index";
import "./Form.css";

export type FormVariant = "checkbox-form" | "subscribe-form";

export interface FormProps {
  variant?: FormVariant;
  // className: string;
  inputClassName: string;
  placeholder: string;
  // buttonClassName: string;
  buttonText: string;
  onFormSubmit?: (value: string) => void;
}

const Form: React.FC<FormProps> = ({
  variant,
  inputClassName,
  placeholder,
  buttonText,
  onFormSubmit,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!value) return;
    onFormSubmit?.(value);
    setValue("");
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
      <Input
        id="subscribe-form"
        name="subscribe-form"
        type="email"
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <Button type="submit" variant="subscribe-button">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
