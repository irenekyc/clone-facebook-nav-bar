import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'

const HelpSupport = ({closeSubMenu})=>{
    return(
        <div className="dropdown-container help-container">
               <div className="setting-container-heading mb-1">
            <i onClick={closeSubMenu} className="mr-1 btn-hover-bg fas fa-arrow-left"></i>
            <h4 className="heading-text">Help & Support</h4>
            </div>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-question-circle"></i>} title={"Help Center"}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-comment-alt"></i>} title={"Help Community"}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-envelope"></i>} title={"Support Inbox"}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-exclamation-circle"></i>} title={"Report A Problem"}/>

        </div>
    )
}

export default HelpSupport