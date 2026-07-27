import React from 'react'
import { Text } from '/src/components/index.ts'
import './countdown_item.css'

interface CountdownItemProps{

    numericValue: number;
    timeUnit: 'sec' | 'min' | 'hours' | 'days';

}

const CountdownItem: React.FC<CountdownItemProps> = ({ numericValue, timeUnit }) => {

    return (
        <div className='countdown-item'>
            <Text variant='countdown-text' children={numericValue}></Text>
            <Text variant='header2-button' children={timeUnit}></Text>
        </div>
    );

}

export default CountdownItem