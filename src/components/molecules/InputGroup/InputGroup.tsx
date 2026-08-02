import React from "react";
import { Input } from "/React Projects/Practica-IBM-2026-/src/components/atoms/index";
import "./InputGroup.css";

export interface InputGroupProps {
  className: string;
  inputClassName: string;
  labelContent: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  className,
  inputClassName,
  labelContent,
}) => {
  return (
    <label className={className}>
      <Input type="checkbox" className={inputClassName}></Input>
      {labelContent}
    </label>
  );
};

export default InputGroup;
