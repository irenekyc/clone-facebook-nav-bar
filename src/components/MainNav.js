import React, {useState} from 'react'
import MainNavButton from './MainNavButton'

const MainNav = ()=>{
    const [active, setActive]= useState("home")

    return(
        <div className="main-nav">
            <ul className="flex-box">
                <MainNavButton  type={"home"} active={active} click={()=>setActive("home")} icon={<i className="fas fa-home des-hover" data-des="Home" id="home"></i>}/>
                <MainNavButton  type={"watch"} active={active} click={()=>setActive("watch")} icon={<i className="fas fa-tv des-hover notification-num" data-des="Watch" data-notification="6" id="watch"></i>} />
                <MainNavButton  type={"marketplace"} active={active} click={()=>setActive("marketplace")} icon={<i className=" fas fa-store des-hover" data-des="MarketPlace" id="marketplace"></i>} />
                <MainNavButton  type={"groups"} active={active} click={()=>setActive("groups")} icon={<i className=" fas fa-users des-hover" data-des="Groups" id="groups"></i>} />
                <MainNavButton  type={"gaming"} active={active} click={()=>setActive("gaming")} icon={<i className=" fas fa-puzzle-piece des-hover" data-des="Gaming" id="gaming"></i>} />
                
            </ul>
        </div>
    )

}

export default MainNav