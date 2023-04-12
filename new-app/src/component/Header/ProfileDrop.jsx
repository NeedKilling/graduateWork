import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames"


import profileAvatar from "../../assets/img/avatar_none.png"
import profileIcon from "../../assets/icons/1.svg"
import notifications from "../../assets/icons/2.svg"
import bookmark from "../../assets/icons/mark.svg"
import exit from "../../assets/icons/Exit.svg"

const ProfileDrop = ({active,setActive}) => {
const activeRef = useRef(false);

/////////////
// const onClouse = () => {
// setActive(false)
// }
// useEffect(()=>{
//     if (!active) return;

//     const  handleClick = e => {
//         if (!activeRef.current) return;
//         if (!activeRef.current.contains(e.target)) return;
//         onClouse();
//     }

//     document.addEventListener('click',handleClick)
//     return ()=>{
//         document.removeEventListener('click',handleClick)
//     }
// },[active, onClouse])

// if (!active) return false
////////////////
    return(
        
       
        <div   ref={activeRef} className={active === true ? "dropdown-content" : "dropdown-content dropdown-content_show"} onClick={() => setActive(false) }>
                
                        <div className="dropdown_content">
                            <a href="/Profile" className="dropdown-content__item"><img src={profileIcon} alt=""></img>Профиль</a>
                            <a href="#" className="dropdown-content__item"><img src={notifications} alt=""></img>Уведомления</a>
                            <a href="#" className="dropdown-content__item"><img src={bookmark} alt=""></img>Закладки</a>
                            <div className="dropdown-content__item line"></div>
                            <a href="#" className="dropdown-content__item btn"><img src={exit} alt="exit"></img><span>Выйти</span></a>
                        </div>
                
       
        </div>
       

    )
    }


export default ProfileDrop;

