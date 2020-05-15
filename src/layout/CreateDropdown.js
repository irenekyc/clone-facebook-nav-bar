import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'



const CreateDropdown = ()=>{

    return(


        <div className="dropdown-container dropdown-container-create">
            <div className="heading-text mb-1"> Create</div>
            <DropdownItem  size={"normal"} leftIcon={<i className=" fas fa-edit"></i>} title={"Post"} />
            <DropdownItem  size={"normal"} leftIcon={<i className=" fas fa-book-open"></i>} title={"Story"} />
            <DropdownItem size={"normal"} leftIcon={<i className=" fas fa-trophy"></i>} title={"Life Event"}/>
            <hr className="my-1"></hr>
            <DropdownItem size={"normal"} leftIcon={<i className=" fab fa-font-awesome-flag"></i>} title={"Post"} subtitle={"Connect and share with customers or fans."}/>
            <DropdownItem size={"normal"} leftIcon={<i className=" fas fa-bullhorn"></i>} title={"Ad"} subtitle={"Advertise your business, brand or organization."}/>
            <DropdownItem size={"normal"} leftIcon={<i className=" fas fa-users"></i>} title={"Groups"} subtitle={"Connect with people who share your interest."}/>
            <DropdownItem size={"normal"} leftIcon={<i className=" fas fa-calendar-plus"></i>} title={"Event"} subtitle={"Bring people together with a public or private event."}/>
            <DropdownItem size={"normal"} leftIcon={<i className=" fas fa-shopping-basket"></i>} title={"Marketplace"} subtitle={"Sell items to people in your community."}/>
            <DropdownItem size={"normal"} leftIcon={<i class=" fas fa-coins"></i>} title={"Fundraiser"} subtitle={"Raise money for a cause your care about."}/>
       
        </div>
    
    )

}

export default CreateDropdown