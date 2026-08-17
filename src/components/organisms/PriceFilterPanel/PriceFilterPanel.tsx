import { useState } from "react";
import { Card, Heading, Button, Icon } from "../../atoms";
import CheckboxForm from "../CheckboxForm/CheckboxForm";
import "./PriceFilterPanel.css";

interface PriceFilterPanelProps {
  min: number;
  max: number;
  filterIcon: string;
  colors: { label: string; count: number }[];
  conditions: { label: string; count: number }[];
  decorativeImage?: string;
  onFilter?: (range: { from: number; to: number }) => void;
}

// Two overlapping <input type="range"> make a "dual" slider: one controls the
// low value, one controls the high value, and each is clamped so they can't cross.
function PriceFilterPanel({
  min,
  max,
  filterIcon,
  colors,
  conditions,
  decorativeImage,
  onFilter,
}: PriceFilterPanelProps) {
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const handleFromChange = (value: number) => {
    setFrom(Math.min(value, to));
  };

  const handleToChange = (value: number) => {
    setTo(Math.max(value, from));
  };

  return (
    <Card className="price-filter-panel">
      <Heading lvl={3}>Fill by price</Heading>

      <div className="price-filter-panel__slider">
        <input
          type="range"
          min={min}
          max={max}
          value={from}
          onChange={(e) => handleFromChange(Number(e.target.value))}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={to}
          onChange={(e) => handleToChange(Number(e.target.value))}
        />
      </div>

      <div className="price-filter-panel__values">
        <span>From: ${from}</span>
        <span>To: ${to}</span>
      </div>

      <CheckboxForm
        className="checkbox-form"
        title="Color"
        contentList={colors.map((c) => `${c.label} (${c.count})`)}
      />

      <CheckboxForm
        className="checkbox-form"
        title="Item Condition"
        contentList={conditions.map((c) => `${c.label} (${c.count})`)}
      />

      <Button
        variant="filter-button"
        className="button button--filter-button price-filter-panel__button"
        onClick={() => onFilter?.({ from, to })}
      >
        <Icon src={filterIcon} alt="" size={16} />
        Filter
      </Button>

      {decorativeImage && (
        <img className="price-filter-panel__decoration" src={decorativeImage} alt="" />
      )}
    </Card>
  );
}

export default PriceFilterPanel;
