import React from 'react';

import Logo from "./assets/img/Logo.svg"
import profileIcon from "./assets/icons/1.svg"
import notifications from "./assets/icons/2.svg"
import bookmark from "./assets/icons/mark.svg"
import vk from  "./assets/img/VK_Compact_Logo 1.png"
import telegram from  "./assets/img/telegram.png"

function Footer(){
    return(
<footer className="footer">
    <div className="container">
       <div className="wrapper">
        <div className="footer__label">
            <div className="logo">
                <a href="#"><img className="logo__img" src={Logo} alt="logo"></img></a>
                <a href="#" className="logo__text"><span>Ranobe</span>Room</a>
            </div>
            <h3 className="logo-title">Удобный сайт для прочтения ранобе <br></br>
                на русском языке. </h3>
            <div className="text">© 2023 RanobeRoom.ru</div>
        </div>

        <ul className="menu-footer">
                <li><a href="#" className="menu-footer__link">Популярное</a></li>
                <li><a href="#" className="menu-footer__link">Каталог</a></li>
                <li><a href="#" className="menu-footer__link">Подписка</a></li>
        </ul>

        <ul className="list">
            <li><a href="#" className="list__link"><img src={profileIcon} alt="profile"></img>Профиль</a></li>
            <li><a href="#" className="list__link"><img src={notifications} alt="notice"></img>Уведомления</a></li>
            <li><a href="#" className="list__link"><img src={bookmark} alt="mark"></img>Закладки</a></li>
        </ul>

        <div className="сontacts">
            <h3 className="contacts__title">Контакты</h3>
            <div className="contacts__text">Круглосуточная техническая поддержка<br></br>support@RanobeRoom.ru</div>
            <div className="contacts__social">
                <a href="#"><img src={vk} alt="vk" className="vk"></img></a>
                <a href="#"><img src={telegram} alt="telegram" className="telegram"></img></a>
            </div>
            
        </div>

       </div>

    </div>
</footer>

    )
}

export default Footer;