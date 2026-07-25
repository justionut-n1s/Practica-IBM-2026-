import React, {InputHTMLAttributes} from 'react'
import './input.css'

export type TextInputVariant = 'header-input' | 'email-input';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type: 'text' | 'checkbox' | 'range';
    variant?: TextInputVariant;
}

const Input: React.FC<InputProps> = ({ type , className='' , ...otherProps}) => {

    // const TagName = 'input';

    // if(type === 'checkbox'){
    //     return (<TagName type={type} className='checkbox'></TagName>)
    // }
    // else if(type === 'text'){
    //     return (<TagName type={type} className={'text-input text-input--${variant}'}></TagName>)
    // }

    return (<input type={type} className={className}{...otherProps}></input>);

}

export default Input;