import React from "react";
import { Link } from "react-router-dom";

import profileIcon from "../../assets/icons/1.svg"
import notifications from "../../assets/icons/2.svg"
import bookmark from "../../assets/icons/mark.svg"
import exit from "../../assets/icons/Exit.svg"

const ProfileDrop = ({active,setActive}) => {

    return(
        <div  className={active === true ? "dropdown-content" : "dropdown-content dropdown-content_show"} onClick={() => setActive(false) }>
                
                        <div className="dropdown_content">
                            <Link to="/Profile"><div className="dropdown-content__item"><img src={profileIcon} alt=""></img>Профиль</div></Link>
                            <div  className="dropdown-content__item"><img src={notifications} alt=""></img>Уведомления</div>
                            <div  className="dropdown-content__item"><img src={bookmark} alt=""></img>Закладки</div>
                            <div className="dropdown-content__item line"></div>
                            <div className="dropdown-content__item btn"><img src={exit} alt="exit"></img><span>Выйти</span></div>
                        </div>
        </div>
    )
    }
export default ProfileDrop;

