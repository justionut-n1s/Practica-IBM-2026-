import { useState } from "react";
import "./RangeSlider.css";

interface RangeSliderProps {
  min: number;
  max: number;
  initialValue?: number;
}

// Numeric value slider (e.g. max price). Props: min, max, initialValue (optional)

function RangeSlider({ min, max, initialValue }: RangeSliderProps) {
  const [value, setValue] = useState(initialValue ?? min);

  return (
    <div className="range-slider">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="range-slider__input"
      />
      <span className="range-slider__value">${value}</span>
    </div>
  );
}

export default RangeSlider;
