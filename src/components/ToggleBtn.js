import React from 'react'

const ToggleBtn = ()=>{
    return(
        <div className="toggle-btn-container">
            <input type="checkbox" class="toggle-mode" id="toggle-dark-mode" />
            <label className="toggle-btn" for ="toggle-dark-mode"></label>
        </div>
    )

}

export default ToggleBtn