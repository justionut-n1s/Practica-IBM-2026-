import React, { ButtonHTMLAttributes } from 'react'
import './button.css'

export type ButtonVariant = 'subscribe-button' | 'add-button' | 'shop-now-button' | 'filter-button';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    variant?: ButtonVariant;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className='', ...otherProps }: ButtonProps) => {

    // const TagName = 'button';

    // return (
    //     <TagName className={'button button--${variant}'}>{children}</TagName>
    // );

    return (
        <button className={className}{...otherProps}>{children}</button>
    );

}

export default Button;