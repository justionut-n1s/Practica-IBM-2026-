import React from 'react'
import { ListItem } from '/src/components/index.ts'
import './dropdown_list.css'

interface DropdownListProps {

    contentList: string[];

}

const DropdownList: React.FC<DropdownListProps> = ({ contentList }) => {

    return (
        <ul className='dropdown-list'>
            {contentList.map((row, index) => (
                <ListItem key={index} className='list-item' children={contentList[index]}></ListItem>
            ))}
        </ul>
    );

}

export default DropdownList