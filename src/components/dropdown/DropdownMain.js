import React, {useState, Fragment} from 'react'
import CreateDropdown from '../../layout/CreateDropdown'
import MessengerDropdown from '../../layout/MessengerDropdown'
import NotificationDropdown from '../../layout/NotificationDropdown'
import AccountDropdown from '../../layout/AccountDropdown'
import SettingPrivacy from '../../layout/SettingPrivacy'
import HelpSupport from '../../layout/HelpSupport'

const DropdownMain = ({menu})=>{
    const [subMenu, setSubMenu] = useState("account")

    return(
       
        <Fragment>
            {menu ==="create" && <CreateDropdown menu={menu}/>}
            {menu ==="messenger" && <MessengerDropdown menu={menu}/>}
            {menu ==="notification" && <NotificationDropdown menu={menu}/>}
            {menu ==="account" && subMenu === "account" && 
            (<AccountDropdown openSubMenu={(id)=>setSubMenu(id)} />)}
            {menu ==="account" && subMenu ==="setting" && 
            <SettingPrivacy closeSubMenu={()=>setSubMenu("account")}/>}   
            {menu === "account" && subMenu === "help" && 
            <HelpSupport closeSubMenu={()=>setSubMenu("account")} />} 
        </Fragment>
      
    

    )


}

export default DropdownMain