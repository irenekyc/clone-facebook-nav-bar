import React from 'react'
import DropdownItem from '../components/dropdown/DropdownItem'

const MessengerDropdown = ()=>{
    return(
        <div className="dropdown-container dropdown-container-messenger">
            <div className="flex-box mb-1">
            <h4 className="heading-text mr-small"> Messenger</h4>
            <div className="flex-box messenger-heading-btn">
                <i className="btn-hover-bg des-hover fas fa-expand-arrows-alt" data-des="See All"></i>
                <i className="btn-hover-bg des-hover fas fa-edit" data-des="New Message"></i>
                <i className="btn-hover-bg des-hover fas fa-ellipsis-h" data-des="Options"></i>
            </div>
            </div>
            <div className="messenger-search-box search-bar mb-1">
            <i className="btn-small fas fa-search"></i>
            <input type="text" placeholder="Search Messenger"  />
            </div>

            <DropdownItem size={"tall"} image={true} leftIcon={'images/avatar-ali.png'} title={'Ali C'} subtitle={"You: Hi there!"}/>
            <DropdownItem size={"tall"} image={true} leftIcon={'images/avatar-shanai.png'} title={'Shanai Michael'} subtitle={"I wish you were her"}/>
            <DropdownItem size={"tall"} image={true} leftIcon={'images/avatar-richard.png'} title={'Richard Live'} subtitle={"Richard sent a link"}/>
            <DropdownItem size={"tall"} image={true} leftIcon={'images/avatar-anisha.png'} title={'Anisha'} subtitle={"You: I will be there! see you!"}/>
        <div className="go-to-messenger">
            <a className="primary-blue-text" href="#"> See All in Messenger</a>
        </div>
        </div>
    )

}

export default MessengerDropdown