import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'

const NotificationDropdown = ()=>{
    return(
        <div className="dropdown-container dropdown-container-notification">
            <h4 className="heading-text"> Notification</h4>
            <h5 className="my-small"> New </h5>
            <DropdownItem size={"tall"} image={true} notificationType={"comment"} leftIcon={"images/thumbnail-3.png"} title={"Denise commented on your post"} subtitle={"30 minutes ago"}/>
            <h5 class="my-small"> Earlier</h5>
            <DropdownItem size={"tall"} image={true} notificationType={"post"} leftIcon={"images/thumbnail-1.png"} title={"Ali shares Lady Gaga's posts"} subtitle={"1 day ago"}/>
            <DropdownItem size={"tall"} image={true} notificationType={"invite"} leftIcon={"images/thumbnail-2.png"} title={"David invites you to like Covid-19 page"} subtitle={"2 days ago"}/>
            <DropdownItem size={"tall"} image={true} notificationType={"likes"} leftIcon={"images/thumbnail-1.png"} title={"Ali likes the post you are tagged in"} subtitle={"2 days ago"}/>
        </div>
    )
}

export default NotificationDropdown