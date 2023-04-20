import React from 'react';
import {BookMark, SliderBig,SliderMin} from '../component';

import star from "../assets/icons/star.svg"


function Home ({items}){
    
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

    <SliderBig items={items}/>

    <div className="lastUpdate">
        <div className="container">
            <div className="lastUpdate__title">
                <div className="line"></div>
                <h3 className="title">Последние обновления</h3>
                <div className="line"></div>
            </div>
                {
                    items.map(obj =>(
                    <div key = {obj.id}className="book">
                        <div className="book-item">
                            <div className="rating">
                                <img src={star} alt="star" className="star"></img>
                                <p className="rating-text">{obj.rating}</p>
                            </div>
                            <div className="book-item__top">
                                <div className="book-item__left"><img src={obj.imageUrl} alt="book"></img></div>
                                <div className="book-item__right"><a href="#" className="right-title">{obj.name}/<br></br><span>{obj.subName}</span></a>
                                    <div className="right-description">{obj.description}</div>
                                </div>
                            </div>
                            <div className="book-item__bottom">
                                <a href="#" className="read">Читать</a>
                                <BookMark items = {["Читаю","В планах","Прочитано","Любимое","Брошено"]}/>
                            </div>
                        </div>
                    </div>
                    ))
                }
                
                    <button className="more">Загрузить еще...</button>
        </div>
    </div>
            </div>
        )
    
}

export default Home;