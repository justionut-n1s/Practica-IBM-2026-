import React from 'react'
import './CallCenterContainer.css'

export interface CallCenterContainerProps {

    className1: string;
    className2: string;
    iconClassName? : string;
    primaryTextClassName: string;
    primaryTextContent: string;
    secondaryTextClassName: string;
    secondaryTextContent: string;

}

const CallCenterContainer: React.FC<CallCenterContainerProps> = ({className1, className2, 
    primaryTextClassName, primaryTextContent, 
    secondaryTextClassName, secondaryTextContent}) => {

    return (

        <div className={className1}>
            <p className={primaryTextClassName}>{primaryTextContent}</p>
            <div className={className2}>
                <p className={primaryTextClassName}>{primaryTextContent}</p>
                <p className={secondaryTextClassName}>{secondaryTextContent}</p>
            </div>
        </div>

    );

}

export default CallCenterContainer