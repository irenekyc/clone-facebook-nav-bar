import React from 'react'
import MainNavButton from './MainNavButton'

const UserArea = ({goToMenu, menu, children})=>{

    return (

        <div className="user-area">
            <ul className="flex-box">
                <div className="profile flex-box mr-small">
                    <img class="mr-small" src="images/profile-thumbnail.jpg" alt=""/>
                    Irene K
                </div>
                <MainNavButton active={menu} type={"create"} click={()=>goToMenu("create")} icon={<i className="btn-bg fas fa-plus des-hover" data-des="Create" id="create"></i>} />
                <MainNavButton active={menu} type={"messenger"} click={()=>goToMenu("messenger")} icon={<i className="btn-bg fab fa-facebook-messenger des-hover"data-des="Messenger" id="messenger"></i>}/>
                <MainNavButton active={menu} type={"notification"} click={()=>goToMenu("notification")} icon={<i className="btn-bg fas fa-bell des-hover"  data-des="Notifications" id="notification"></i>} />
                <MainNavButton active={menu} type={"account"} click={()=>goToMenu("account")} icon={<i className="btn-bg fas fa-caret-down des-hover" data-des="Account" id="account"></i>}/>
            </ul>
            {menu ==="create" || menu==="messenger" || menu==="notification" 
            || menu==="account" || menu ==="setting" || menu==="help" ? children : null}

        </div>
   
    )
}

export default UserArea