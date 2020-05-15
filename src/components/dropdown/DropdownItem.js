import React from 'react'

const DropdownItem = ({size, image, rightIcon, leftIcon, title, subtitle, openSubMenu, id, notificationType})=>{
   
    return(
        <li className={`flex-box dropdown-item-${size} `} onClick={openSubMenu} id={id}>
            <div className={`dropdown-item-left mr-1 ${notificationType}`}>
                {image? (<img src={leftIcon} alt=""/>)
                : !leftIcon ? (<i className="btn-bg far fa-clock"></i>):
                leftIcon}
            </div>
            <div className="dropdown-item-main mr-1">
                <h4> {title} </h4>
                {subtitle && (<p className="secondary-text">{subtitle}</p>)}
            </div>
            {rightIcon && (<div className="dropdown-item-right">
                {rightIcon}
            </div>)}
        </li>
    )

}

export default DropdownItem