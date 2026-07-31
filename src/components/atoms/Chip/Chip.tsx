import { useState } from "react";
import "./Chip.css";

interface ChipProps {
  label: string;
}

// Removable tag with a delete button. Props: label = displayed text

function Chip({ label }: ChipProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="chip">
      <span>{label}</span>
      <button className="chip__remove" onClick={() => setIsVisible(false)}>
        X
      </button>
    </div>
  );
}

export default Chip;
