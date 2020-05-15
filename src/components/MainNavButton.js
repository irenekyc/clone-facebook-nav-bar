import React from 'react'

const MainNavButton = ({icon, click, type, active})=>
{    let activeClass = " "
    if(active !=null && type !=null){
        if (active === type){
            activeClass="active"
        } 
    }
   
   
    return(
        <li className={`main-nav-button ${activeClass}`} onClick={click}>
            {icon}
        </li>
    )

}

export default MainNavButton