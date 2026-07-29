import React from 'react'
import './ListItem.css'

interface ListItemProps {

    children: React.ReactNode;
    className: string;
    key?: number;

}

const ListItem: React.FC<ListItemProps> = ({children , className}) => {

    return (
        <li className={className}>{children}</li>
    )

}

export default ListItem