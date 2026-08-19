import { useState } from "react";
import { Card, Heading, Button, Icon } from "../../atoms";
import { Filter } from "../../../assets/icons/index";
import CheckboxForm from "../CheckboxForm/CheckboxForm";
import "./PriceFilterPanel.css";

interface PriceFilterPanelProps {
  min: number;
  max: number;
  colors: { label: string; count: number }[];
  conditions: { label: string; count: number }[];
  decorativeImage?: string;
  onFilter?: (range: { from: number; to: number }) => void;
}

function PriceFilterPanel({
  min,
  max,
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
      <Heading lvl={4}>Fill by price</Heading>

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
        <Icon src={Filter} alt="" size={16} className="icon--white" />
        Filter
      </Button>
      {decorativeImage && (
        <img
          className="price-filter-panel__decoration"
          src={decorativeImage}
          alt=""
        />
      )}
    </Card>
  );
}

export default PriceFilterPanel;
