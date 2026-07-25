import React, {useState, SubmitEvent} from 'react'
import {Input, Button} from '/src/components/index.ts'
import './form.css'

export type FormVariant = 'checkbox-form' | 'subscribe-form';

export interface FormProps{
    
    variant?: FormVariant;
    className: string;
    inputClassName: string;
    placeholder: string;
    buttonClassName: string;
    buttonText: string;
    onFormSubmit?: (inputValue: string) => void;
}

const Form: React.FC<FormProps> = ({variant, className='', inputClassName, placeholder, buttonClassName, buttonText}) => {

    const[value, setValue] = useState('');

    // const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     if(!value.trim()){
    //         return;
    //     }
    //     onFormSubmit(value);
    // }

    return (
    <form className={className}>
        <Input type='text' className={inputClassName} placeholder={placeholder}></Input>
        <Button className={buttonClassName}>{buttonText}</Button>
    </form>
    );
}

export default Form;