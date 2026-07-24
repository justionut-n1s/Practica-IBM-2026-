import './NavItem.css'
import { Icon, Hyperlink } from '../../atoms'
import arrow from '../../../assets/icons/arrow.png'

interface NavItemProps {
    iconSrc ?: string
    textItem : string  
    link : string
    is_arrow ?: boolean
}

function NavItem({ iconSrc, textItem, link , is_arrow }: NavItemProps) {
    return(
        <div className="nav-item">
            {iconSrc &&
                <Icon src={iconSrc} alt='Icon' size={20}/>
            }
            <Hyperlink message={textItem} link={link} ></Hyperlink>
            {is_arrow &&
                <Icon src={arrow} alt='Icon' size={8}/>
            }
        </div>
    )
}

export default NavItem