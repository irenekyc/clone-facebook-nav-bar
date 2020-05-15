import React from 'react'

const Search = ({goToMenu, menu, children})=>{
    console.log(menu)
 

   
    return (
        
        <div className="search-box flex-box">
            <i className="main-logo fab fa-facebook"></i>
            <div className="search-bar flex-box">
            <i className="btn-small fas fa-search"></i>
            <input type="text" placeholder="Search Facebook" onFocus={goToMenu} />
            </div>
        {menu === "search" && children}
        </div>
      

    )
}

export default Search