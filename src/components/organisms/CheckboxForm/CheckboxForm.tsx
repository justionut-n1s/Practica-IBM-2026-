import React from 'react'
import { Text } from '../../atoms'
import {InputGroup } from '../../molecules'
import './CheckboxForm.css'

interface CheckboxFormProps {

    className: string;
    title: string;
    contentList: string[];

} 

const CheckboxForm: React.FC<CheckboxFormProps> = ({ className, title, contentList }) => {

    return (
        <div className={className}>
            <Text variant='checkbox-form-title' children={title}></Text>
            <form className={className}>
                {contentList.map((row, index) => (
                    <InputGroup className='text text--input-group text--input-group--position' inputClassName='checkbox' 
                    labelContent={contentList[index]}></InputGroup>
                ))}
            </form>
        </div>
    );

}

export default CheckboxForm