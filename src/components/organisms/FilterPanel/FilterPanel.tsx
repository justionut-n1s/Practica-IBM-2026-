import React from "react";
import { RangeSlider, Heading, Card, Button, Icon } from "../../atoms/index";
import { CheckboxForm } from "../index";
import { Filter } from "../../../assets/icons/index";
import { translations } from "../../../translations/translations";
import "./FilterPanel.css";

interface ComboboxList {
  id: number;
  title: string;
  options: string[];
}

interface FilterPanelProps {
  checkboxList: ComboboxList[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({ checkboxList }) => {
  const translation = translations.en.filterPanel;
  return (
    <Card className="filter-panel">
      <div className="filter-panel__title">
        <Heading lvl={4}>{translation.title}</Heading>
      </div>
      <div className="filter-panel__range-slider">
        <RangeSlider min={0} max={1000}></RangeSlider>
      </div>
      <div className="filter-panel__checkbox-container">
        {checkboxList.map(({ id, title, options }) => (
          <CheckboxForm
            key={id}
            className="checkbox-form"
            title={title}
            contentList={options}
          ></CheckboxForm>
        ))}
      </div>
      <div className="filter-panel__button">
        <Button variant="filter-button">
          <span className="filter-panel__button-content">
            <Icon
              src={Filter}
              alt="FilterIcon"
              size={12}
              className="icon--white"
            ></Icon>
            {translation.buttonLabel}
          </span>
        </Button>
      </div>
    </Card>
  );
};

export default FilterPanel;
