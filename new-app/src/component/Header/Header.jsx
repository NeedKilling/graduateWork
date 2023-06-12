import React, { useState ,useRef, useContext} from 'react';
import ProfileDrop from './ProfileDrop'
import { useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom'
import {AiOutlineUser} from "react-icons/ai"
import {ImExit} from "react-icons/im"

import Logo from "../../assets/img/Logo.svg"
import search from "../../assets/icons/search.svg"
import profileAvatar from "../../assets/img/avatar_none.png"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"
import {CiUser} from "react-icons/ci"

import { useTheme } from '../../component/Switch-theme'; 
import { AuthContext } from '../../hoc/AuthProvider';

function Header(){
    const navigate = useNavigate()

    const {user,setUser} = useContext(AuthContext)

    const logOutUser = () => {
        setUser({
            email:''
        })
        localStorage.removeItem('user')
        navigate('/')
    }

///////////////////////
    const DropRef = React.useRef(); 
    const [dropActive,setDropActive] = React.useState(false)
    const taggleDrop = () => {
        setDropActive(!dropActive)
    }
    const handleOutClick = (e)=>{
        if (e.target !== DropRef.current){
            setDropActive(false)
        }      
        }

    React.useEffect(() => {
        document.addEventListener('click' , handleOutClick);
    },[]);


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


   
const {totalCount} = useSelector(({Profile}) => ({
    totalCount: Profile.totalCount,
}))
    const items = useSelector(({Profile}) => Profile.items);
    const total = Object.keys(items)

    const itemsCatalog = useSelector((state) => state.Books.items)

    const [valueSearh,setValueSearh] = React.useState('')

    const filtresBooks = itemsCatalog.filter(book => {
       return book.name.toLowerCase().includes(valueSearh.toLowerCase()) || book.subname.toLowerCase().includes(valueSearh.toLowerCase())
   })

   const reset = () =>{
        setValueSearh('')
   }


//////////////////////////
    

   

   
   

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

                    <input value = {valueSearh} onChange = {(e)=>setValueSearh(e.target.value)} type="text" placeholder="Поиск по названию..."></input>

                    <div onClick={reset} className="clear"></div>

                        <ul className="autocomplete">
                            {
                                filtresBooks.map((obj,index)=>(
                                    valueSearh  
                                        ? <Link to = {`/Book/${obj.id}`}>
                                            <li key={`${obj.name}_${index}`} className='autocomplete_item'>
                                                <img className="autocomplete_item_img"  src={obj.imageurl} alt="image"/>
                                                <div className="autocomplete_item_text">
                                                    <div className="name">{obj.name}</div>
                                                    <div className="subname">{obj.subname}</div>
                                                </div>
                                            </li>
                                        </Link>
                                        : null
                                ))
                            }
                        </ul>
                    
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
                    
                    {
                    user.email ? 
                        
                            <div  className='dropdown-profile'>
                                    <img ref = {DropRef} onClick={taggleDrop} src={profileAvatar} alt="avatar_none"></img>
                                    <div className='dropdown-profile_counter'>{total.length}</div>
                                        {
                                            dropActive &&
                                                <div  className="dropdown-content">
                                                    <Link to="/Profile"><div className="dropdown-content__item"><AiOutlineUser/>Профиль</div></Link>
                                                    {/* <div  className="dropdown-content__item"><img src={bookmark} alt=""></img>Закладки</div> */}
                                                    <div className="dropdown-content__item line"></div>
                                                    <div onClick = {logOutUser} className="dropdown-content__item btn">{<ImExit/>}<span>Выйти</span></div>
                                                </div>
                                        }
                            </div>   
                        
                    :
                        <Link to = {'/LogIn'} className='login'>
                            <div className='login_img'><CiUser/></div>
                            <div className='login_text'>Войти</div>
                        </Link>
                    }
                     
                      
            </div>     
            
            
            
        </nav>
    </div>
    
</header>

</div>

);
}

export default Header;