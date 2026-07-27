import React from "react"
import { CountdownItem } from '/src/components/index.ts'
import './countdown_section.css'

interface CountdownSectionProps {

    numericValue: number;

}

const CountdownSection: React.FC<CountdownSectionProps> = ({ numericValue }) => {

    return (
        <div className="countdown-section-style">
            <CountdownItem numericValue={numericValue} timeUnit='Days'></CountdownItem>
            <CountdownItem numericValue={numericValue} timeUnit='Hours'></CountdownItem>
            <CountdownItem numericValue={numericValue} timeUnit='Min'></CountdownItem>
            <CountdownItem numericValue={numericValue} timeUnit='Sec'></CountdownItem>
        </div>
    );

}

export default CountdownSection