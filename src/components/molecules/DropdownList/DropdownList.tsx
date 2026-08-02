import React from "react";
import { ListItem } from "../../atoms/index";
import "./DropdownList.css";

interface DropdownListProps {
  contentList: string[];
}

const DropdownList: React.FC<DropdownListProps> = ({ contentList }) => {
  return (
    <ul className="dropdown-list">
      {contentList.map((row, index) => (
        <ListItem
          key={index}
          className="list-item"
          children={contentList[index]}
        ></ListItem>
      ))}
    </ul>
  );
};

export default DropdownList;
