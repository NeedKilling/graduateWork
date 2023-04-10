import React from 'react';
import ProfileDrop from './ProfileDrop'

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import Logo from "../assets/img/Logo.svg"
import search from "../assets/icons/search.svg"
import profileAvatar from "../assets/img/avatar_none.png"
import profileIcon from "../assets/icons/1.svg"
import notifications from "../assets/icons/2.svg"
import bookmark from "../assets/icons/mark.svg"
import exit from "../assets/icons/Exit.svg"

import Home from "../Pages/Home"
import Profile from "../Pages/Profile"
import Catalog from "../Pages/Catalog"
import Popular from '../Pages/Popular';
import Subscription from '../Pages/Subscription'

function Header(){

    const drop = () =>{
        alert("done")
    }
   

return(
    <div>
<header className="js-header">
    <div className="container">
        <nav className="nav">
            <a href="/" className="logo"><img src={Logo} alt="logo"></img></a>
            <ul className="menu">
                <li><a href="/Popular" className="menu_link">Популярное</a></li>
                <li><a href="/Catalog" className="menu_link">Каталог</a></li>
                <li><a href="/Subscription" className="menu_link">Подписка</a></li>
            </ul>
            <div className="searh">
                <form className="searh_form">
                    <button type="submit"><img src={search} alt="search"></img></button>
                    <input type="text" placeholder="Поиск по названию..."></input>
                </form>
            </div>
           
            <div className="dropdown-profile">
            <ProfileDrop onClick={drop}>
                        <img src={profileAvatar} alt="avatar_none"></img>
                        <div id="drop" className="dropdown-content">
                            <a href="/Profile" className="dropdown-content__item"><img src={profileIcon} alt=""></img>Профиль</a>
                            <a href="#" className="dropdown-content__item"><img src={notifications} alt=""></img>Уведомления</a>
                            <a href="#" className="dropdown-content__item"><img src={bookmark} alt=""></img>Закладки</a>
                            <div className="dropdown-content__item line"></div>
                            <a href="#" className="dropdown-content__item btn"><img src={exit} alt="exit"></img><span>Выйти</span></a>
                        </div>
                
            </ProfileDrop> 
            </div>
            
        </nav>
    </div>
    
</header>

<Router>
    <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Catalog" element={<Catalog/>}/>
        <Route  path="/Profile" element={<Profile/>}/>
        <Route  path="/Popular" element={<Popular/>}/>
        <Route  path="/Subscription" element={<Subscription/>}/>

    </Routes>
</Router>

</div>

);
}

export default Header;