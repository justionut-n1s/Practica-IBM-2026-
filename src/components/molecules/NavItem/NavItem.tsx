import './NavItem.css'
import { Icon, Hyperlink } from '../../atoms'

interface NavItemProps {
    iconSrc ?: string
    textItem : string  
    link : string
}

function NavItem({ iconSrc, textItem, link}: NavItemProps) {
    return(
        <div className="nav-item">
            {iconSrc &&
                <Icon src={iconSrc} alt='Icon' size={20}/>
            }
            <Hyperlink message={textItem} link={link} ></Hyperlink>
        </div>
    )
}

export default NavItem