import React, {InputHTMLAttributes} from 'react'
import './input.css'

export type TextInputVariant = 'header-input' | 'email-input';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: 'text' | 'checkbox' | 'range';
    variant?: TextInputVariant;
}

const Input: React.FC<InputProps> = ({ type , className='' , ...otherProps}) => {

    return (<input type={type} className={className}{...otherProps}></input>);

}

export default Input;