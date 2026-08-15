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
  onFormSubmit?: (inputValue: string) => void;
}

const Form: React.FC<FormProps> = ({
  variant,
  inputClassName,
  placeholder,
  buttonText,
}) => {
  const [value, setValue] = useState("");

  // const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     if(!value.trim()){
  //         return;
  //     }
  //     onFormSubmit(value);
  // }

  return (
    <form className="subscribe-form">
      <Input
        type="text"
        className={inputClassName}
        placeholder={placeholder}
      ></Input>
      <Button variant="subscribe-button">{buttonText}</Button>
    </form>
  );
};

export default Form;
