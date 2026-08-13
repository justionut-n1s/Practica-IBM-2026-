import React from "react";
import { Text, Icon } from "../../atoms/index";
import "./CallCenterContainer.css";

export interface CallCenterContainerProps {
  // className1: string;
  // className2: string;
  iconSrc: string;
  primaryTextContent: string;
  secondaryTextContent: string;
}

const CallCenterContainer: React.FC<CallCenterContainerProps> = ({
  iconSrc,
  primaryTextContent,
  secondaryTextContent,
}) => {
  return (
    <div className="call-center-container">
      <Icon
        src={iconSrc}
        alt="Icon"
        size={30}
        className="icon icon--gray"
      ></Icon>
      <div className="call-center-container call-center-container--text-container">
        <Text variant="header3-support-center-number">
          {primaryTextContent}
        </Text>
        <Text variant="header3-support-center-text">
          {secondaryTextContent}
        </Text>
      </div>
    </div>
  );
};

export default CallCenterContainer;
