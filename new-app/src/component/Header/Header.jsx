import React, { useState } from 'react';
import ProfileDrop from './ProfileDrop'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


import Logo from "../../assets/img/Logo.svg"
import search from "../../assets/icons/search.svg"
import profileAvatar from "../../assets/img/avatar_none.png"





function Header(){
const [dropActive,setDropActive] = useState(true)
   
const {totalCount} = useSelector(({Profile}) => ({
    totalCount: Profile.totalCount,
}))

return(
    <div>
<header className="js-header">
    <div className="container">
        <nav className="nav">
            <Link to="/"><div className="logo"><img src={Logo} alt="logo"></img></div></Link>
            <ul className="menu">
                <li><Link to="/Popular"><div className="menu_link">Популярное</div></Link></li>
                <li><Link to="/Catalog"><div className="menu_link">Каталог</div></Link></li>
                <li><Link to="/Subscription"><div className="menu_link">Подписка</div></Link></li>
            </ul>
            <div className="searh">
                <form className="searh_form">
                    <button type="submit"><img src={search} alt="search"></img></button>
                    <input type="text" placeholder="Поиск по названию..."></input>
                </form>
            </div>
           
            
            <div onClick={() => setDropActive(!dropActive)} className='dropdown-profile'>
                    <img src={profileAvatar} alt="avatar_none"></img>
                    <div className='dropdown-profile_counter'>{totalCount}</div>
                <ProfileDrop active={dropActive} setActive={setDropActive}/>
            </div>           
                
            
            
            
        </nav>
    </div>
    
</header>

</div>

);
}

export default Header;