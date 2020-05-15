import React, {useState} from 'react';
import Search from './components/Search'
import SearchActive from './components/dropdown/SearchActive'
import MainNav from './components/MainNav'
import UserArea from './components/UserArea'
import DropdownMain from './components/dropdown/DropdownMain'

function App() {
  const [activeMenu, setActiveMenu] = useState("main")

 


  return (
    <div className="navbar flex-box">
      <Search goToMenu={()=>setActiveMenu("search")} menu={activeMenu}>
         <SearchActive closeMenu={()=>setActiveMenu("main")}/>
      </Search>

      <MainNav />

      <UserArea goToMenu={(e)=>setActiveMenu(e)} menu={activeMenu}>
        <DropdownMain menu={activeMenu}/>
      </UserArea>
    </div>    
  );
}

export default App
