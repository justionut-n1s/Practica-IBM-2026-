import React from "react";
import { Text, Icon } from "../../atoms/index";
import { Phone, Headset } from "../../../assets/icons/index";
import "./CallCenterContainer.css";

export interface CallCenterContainerProps {
  className1: string;
  className2: string;
  iconClassName?: string;
  primaryTextContent: string;
  secondaryTextContent: string;
}

const CallCenterContainer: React.FC<CallCenterContainerProps> = ({
  className1,
  className2,
  primaryTextContent,
  secondaryTextContent,
}) => {
  return (
    <div className={className1}>
      <img src={Phone} height={30} width={30} className="icon icon--gray"></img>
      <div className={className2}>
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
