import React, { useState ,useRef} from 'react';
import ProfileDrop from './ProfileDrop'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'


import Logo from "../../assets/img/Logo.svg"
import search from "../../assets/icons/search.svg"
import profileAvatar from "../../assets/img/avatar_none.png"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"

import { useTheme } from '../../component/Switch-theme'; 

function Header(){
    const {theme,setTheme} = useTheme()

    const switchRefDote = useRef()

    const handleSwitch = (e)=>{
        if (e.target === switchRefDote.current){
            switch(theme){
                case 'dark':
                    setTheme('light')
                break;
                case 'light':
                    setTheme('dark')
                break;
            }
        }  
    }



    const HandleSwitchDark = () =>{
        setTheme('dark')
    }
    const HandleSwitchLight = () =>{
        setTheme('light')
    }

const [dropActive,setDropActive] = useState(true)
   
const {totalCount} = useSelector(({Profile}) => ({
    totalCount: Profile.totalCount,
}))
    const items = useSelector(({Profile}) => Profile.items);
    const total = Object.keys(items)
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
                    <div className='submit' type="submit"><img src={search} alt="search"></img></div>
                    <input type="text" placeholder="Поиск по названию..."></input>
                </form>
            </div>
               
           <div className='wrapper'>
                <div className='switchTheme'>
                        <div onClick={HandleSwitchDark} 
                            className={theme!=='light' ? 'switchTheme_item light active' : 'switchTheme_item light disabled'}> <img src={sun} alt="sun" /> </div>
                        <div onClick={HandleSwitchLight} 
                            className={theme!=='dark' ? 'switchTheme_item dark active' : 'switchTheme_item dark disabled'}> <img src={moon} alt="moon" /> </div>
                        <span ref = {switchRefDote}  onClick = {handleSwitch} className='dote'></span>
                </div>
                    
                    <Link to={'/Profile'}>
                        <div onClick={() => setDropActive(!dropActive)} className='dropdown-profile'>
                                <img src={profileAvatar} alt="avatar_none"></img>
                                <div className='dropdown-profile_counter'>{total.length}</div>
                            {/* <ProfileDrop active={dropActive} setActive={setDropActive}/> */}
                        </div>   
                    </Link>    
            </div>     
            
            
            
        </nav>
    </div>
    
</header>

</div>

);
}

export default Header;