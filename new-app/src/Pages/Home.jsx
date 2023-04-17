import React from 'react';
import {Component} from 'react';
import {SliderBig,SliderMin} from '../component';


import star from "../assets/icons/star.svg"
import testbig from "../assets/img/01.png"
import bookmark from "../assets/icons/mark.svg"
import Slider from 'react-slick';


class Home extends Component{
    render(){
        return(
            <div>
                <div className="intro">
        <div className="intro_title">RanobeRoom - ранобе на русском онлайн</div>
</div>

 
<div className="continueRead continueRead_active">
    <div className="container">
        <div className="continueRead_block">
            <h2 className="title">Продолжить чтение</h2>
           <SliderMin/>
        </div>
    </div>
</div>

    <SliderBig/>

    <div className="lastUpdate">
        <div className="container">
            <div className="lastUpdate__title">
                <div className="line"></div>
                <h3 className="title">Последние обновления</h3>
                <div className="line"></div>
            </div>
            
                <div className="book">
                    <div className="book-item">
                        <div className="rating">
                            <img src={star} alt="star" className="star"></img>
                            <p className="rating-text">4.9</p>
                        </div>
                        <div className="book-item__top">
                            <div className="book-item__left"><img src={testbig} alt="book"></img></div>
                            <div className="book-item__right"><a href="#" className="right-title">Повелитель/<span>Overlord</span></a>
                                <div className="right-description">Объявили, что вскоре будут отключены все сервера, и онлайновая игра <br></br>«Иггдрасиль» навсегда закроется. Но почему-то, после того, как сервер <br></br>закрылся, игрок Момонга, оставшийся в сети в последний день, не смог <br></br>выйти, а НИП начали подавать признаки разума. <br></br> <br></br>
                                    Обычный, любящий играть в игры парень, похоже, вместе со своей <br></br> гильдией был перенесен в альтернативный мир.</div>
                            </div>
                        </div>
                        <div className="book-item__bottom">
                            <a href="#" className="read">Читать</a>
                            <div className="book-dropdown">
                                <button className="mark"><img src={bookmark} alt="mark"></img>Закладка</button>
                                <ul id="dropBookmark" className="dropdown-ul">
                                    <li className="dropdown-ul__item">Читаю</li> 
                                    <li className="dropdown-ul__item">В планах</li>
                                    <li className="dropdown-ul__item">Прочитано</li>
                                    <li className="dropdown-ul__item">Любимое</li>
                                    <li className="dropdown-ul__item">Брошено</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <button className="more">Загрузить еще...</button>
        </div>
    </div>
            </div>
        )
    }
}

export default Home;