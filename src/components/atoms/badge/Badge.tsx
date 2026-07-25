import React from 'react'
import './badge.css'

export interface BadgeProps{

    className: string;
    content: string;

}

const Badge: React.FC<BadgeProps> = ({className, content}) => {

    return (
        <div className={className}>
            <p className='text text--badge-text'>{content}</p>
        </div>
    );

}

export default Badge