import React from 'react'
import { Text } from '/src/components/index.ts'
import './footer_column.css'

export interface FooterColumnProps {

    title: string;
    rows: string[];

}

const FooterColumn: React.FC<FooterColumnProps> = ({title, rows}) => {

    return (

        <div className='footer-text-column'>
            <div>
                <p className='text text--title text--title--secondary-title' >{title}</p>
            </div>
            {rows.map((row, index) => (
            <p key={index} className='text text--footer-text'>{rows[index]}</p>
        ))}
        </div>

    );

}

export default FooterColumn