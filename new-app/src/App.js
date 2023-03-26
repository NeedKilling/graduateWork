import React from 'react';
import Header from './Header';
import Footer from './Footer';

import testmin from "./assets/img/book.png"
import testslider01 from "./assets/img/main.png"
import testslider from "./assets/img/slider_book.png"
import star from "./assets/icons/star.svg"
import testbig from "./assets/img/01.png"
import bookmark from "./assets/icons/mark.svg"





function App() {
  return (
<div>

<Header/>

<div className="intro">
        <div className="intro_title">RanobeRoom - ранобе на русском онлайн</div>
</div>

 
<div className="continueRead continueRead_active">
    <div className="container">
        <div className="continueRead_block">
            <h2 className="title">Продолжить чтение</h2>
            <div className="contineSlider">
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>    
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
                <a href="#" className="book">
                    <div className="book_img"><img src={testmin} alt="book"></img></div>
                    <div className="book_name">Повелитель</div>
                    <div className="book_subName">Overlord</div>
                </a>
            </div>
        </div>
    </div>
</div>

    <div className="slider">
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider} alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
        <a href="#" className="slider_book">
            <div className="slider_book_img"><img src={testslider01} alt="book"></img></div>
            <div className="slider_book_name">Повелитель</div>
            <div className="slider_book_subName">Overlord</div>
        </a>
    </div>

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

<Footer/>












  </div>
  )
};

export default App;