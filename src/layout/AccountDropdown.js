import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'
import ToggleBtn from '../components/ToggleBtn'

const AccountDropdown = ({openSubMenu})=>{
    return (
        <div className ="dropdown-container dropdown-container-account">
            <DropdownItem size={"x-tall"} image={true} leftIcon={"images/profile-thumbnail.jpg"} 
                        title={"Irene K"} subtitle={"See your profile"}/>
            <hr className="my-small"></hr>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-comment-dots"></i>} 
                        title={"Give Feedback"} subtitle={"Help us to improve new Facebook."} />
            <hr className="my-small"></hr>
            <DropdownItem id={"setting"}  openSubMenu={()=>openSubMenu("setting")} size={"normal"} leftIcon={<i className="fas fa-cog"></i>} 
                        title={"Setting & Privacy"} rightIcon={<i className="fas fa-chevron-right sub-menu-btn"></i>}/>
            <DropdownItem id={"help"} openSubMenu={()=>openSubMenu("help")} size={"normal"} leftIcon={<i className="fas fa-question-circle"></i>} 
                        title={"Help & Support"} rightIcon={<i className="fas fa-chevron-right sub-menu-btn"></i>}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-moon"></i>} title={"Darkmode"} rightIcon={<ToggleBtn />}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-arrow-circle-left"></i>} 
                        title={"Switch to Classic Facebook"} subtitle={"Go back to the previous Facebook design at anytime"}/>
            <DropdownItem size={"normal"} leftIcon={<i className="fas fa-sign-out-alt"></i>} title={"Logout"} />
            <p className="secondary-text">Privacy · Terms · Advertising · Ad Choices  · Cookies ·  · Facebook © 2020</p>
        </div>
    )
}

export default AccountDropdown