import React from 'react';

import profileAvatar from "./assets/img/avatar_none.png"
import search from "./assets/icons/search.svg"
import profileIcon from "./assets/icons/1.svg"
import notifications from "./assets/icons/2.svg"
import bookmark from "./assets/icons/mark.svg"
import Logo from "./assets/img/Logo.svg"
import exit from "./assets/icons/Exit.svg"

function Header(){
return(
<header className="js-header">
    <div className="container">
        <nav className="nav">
            <a href="#" className="logo"><img src={Logo} alt="logo"></img></a>
            <ul className="menu">
                <li><a href="#" className="menu_link">Популярное</a></li>
                <li><a href="#" className="menu_link">Каталог</a></li>
                <li><a href="#" className="menu_link">Подписка</a></li>
            </ul>
            <div className="searh">
                <form className="searh_form">
                    <button type="submit"><img src={search} alt="search"></img></button>
                    <input type="text" placeholder="Поиск по названию..."></input>
                </form>
            </div>
            <div className="dropdown-profile">
                <button className="profile-btn"><img src={profileAvatar} alt="avatar_none"></img></button>
                <div id="drop" className="dropdown-content">
                    <a href="#" className="dropdown-content__item"><img src={profileIcon} alt=""></img>Профиль</a>
                    <a href="#" className="dropdown-content__item"><img src={notifications} alt=""></img>Уведомления</a>
                    <a href="#" className="dropdown-content__item"><img src={bookmark} alt=""></img>Закладки</a>
                    <div className="dropdown-content__item line"></div>
                    <a href="#" className="dropdown-content__item btn"><img src={exit} alt="exit"></img><span>Выйти</span></a>
                </div>
            </div>
        </nav>
    </div>
</header>

);
}

export default Header;