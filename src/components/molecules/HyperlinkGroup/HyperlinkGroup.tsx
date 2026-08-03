import React from "react";
import { Hyperlink, HyperlinkProps } from "../../atoms/index";
import "./HyperlinkGroup.css";

export interface HyperlinkGroupItem extends HyperlinkProps {
  id: number;
}

export interface HyperlinkGroupProps {
  content: HyperlinkGroupItem[];
}

const HyperlinkGroup: React.FC<HyperlinkGroupProps> = ({ content }) => {
  return (
    <div className="hyperlink-group">
      {content.map(({ id, ...linkProps }) => (
        <div className="hyperlink-group__item">
          <Hyperlink
            key={id}
            className="hyp--header-upper-section"
            {...linkProps}
          ></Hyperlink>
        </div>
      ))}
    </div>
  );
};

export default HyperlinkGroup;
