import React from 'react'
import DropdownItem from './DropdownItem'

const SearchActive = (props)=>{
    return(
    <div className="search-active">
        <div className="search-active-heading flex-box mb-1">
        <i className="btn-bg fas fa-arrow-left mr-1" onClick={props.closeMenu}></i>
        <div className="search-bar">
            <input type="text" placeholder="Search Facebook"></input>
        </div>
        </div>

        <div className="search-active-section flex-box mb-1">
            <h3 className="heading-text"> Recent Search</h3>
            <button className="primary-blue-text"> Edit</button>
        </div>

        <div className="recent-item-lists">
            <ul>
                <DropdownItem size={"normal"} image={true} leftIcon={`images/avatar-ali.png`} title={'Ali C'} rightIcon={<i className=" btn-no-bg fas fa-times"></i>}/>
                <DropdownItem size={"normal"} image={true} leftIcon={`images/avatar-richard.png`} title={'Richard Hush'} rightIcon={<i className=" btn-no-bg fas fa-times"></i>}/>
                <DropdownItem size={"normal"} title={'covid-19 news'} rightIcon={<i className="btn-no-bg fas fa-times"></i>}/>
                <DropdownItem size={"normal"} title={'Youtuujh'} rightIcon={<i className="btn-no-bg fas fa-times"></i>}/>
                <DropdownItem size={"normal"} image={true} leftIcon={`images/avatar-anisha.png`} title={'Anisha Den'} rightIcon={<i className="btn-no-bg fas fa-times"></i>} />
            </ul>
        </div>
            
        

    </div>)

}

export default SearchActive