import React from "react";
import { Text } from "../../atoms/index";
import "./CountdownItem.css";

interface CountdownItemProps {
  numericValue: number;
  timeUnit: "Sec" | "Min" | "Hours" | "Days";
}

const CountdownItem: React.FC<CountdownItemProps> = ({
  numericValue,
  timeUnit,
}) => {
  return (
    <div className="countdown-item">
      <Text variant="countdown-text" children={numericValue}></Text>
      <Text variant="countdown-timeunit" children={timeUnit}></Text>
    </div>
  );
};

export default CountdownItem;
