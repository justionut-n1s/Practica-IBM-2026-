import React from 'react'
import { Text } from '/src/components/index.ts'
import './footer_column.css'

export interface FooterColumnProps {

    mainClassName: string;
    contentClassName: string;
    title: string;
    columnContent: string[];

}

const FooterColumn: React.FC<FooterColumnProps> = ({mainClassName, contentClassName, title, columnContent}) => {

    return (

        <div className={mainClassName}>
            <Text type='p' variant='title text--title--secondary-title' children={title}></Text>
            <div className={contentClassName}>
                {columnContent.map((row, index) => (
                    <Text key={index} variant='footer-text' children={columnContent[index]}></Text>
                ))}
            </div>
        </div>

    );

}

export default FooterColumn