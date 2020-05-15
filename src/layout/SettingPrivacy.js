import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'

const SettingPrivacy = ({closeSubMenu})=>{
    return(
        <div className="dropdown-container setting-container">
            <div className="setting-container-heading mb-1">
            <i onClick={closeSubMenu} className="mr-1 btn-hover-bg fas fa-arrow-left"></i>
            <h4 className="heading-text">Setting & Privacy</h4>
            </div>
            <ul>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-cog"></i>} title={"Setting"}/>
            <DropdownItem size={"normal"} leftIcon={<i class="fas fa-lock"></i>} title={"Privacy Checkup"}/>
            <DropdownItem size={"normal"} leftIcon={<i class="fas fa-lock"></i>} title={"Privacy Shortcut"}/>
            <DropdownItem size={"normal"} leftIcon={<i class="fas fa-list-ul"></i>} title={"Activity Log"}/>
            <DropdownItem size={"normal"} leftIcon={<i class="fas fa-newspaper"></i>} title={"Newsfeed Preference"}/>
            <DropdownItem size={"normal"} leftIcon={<i class="fas fa-globe"></i>} title={"Language"}/>
           
            </ul>
        </div>
    )

}

export default SettingPrivacy