

import React from 'react';
import {Component} from 'react';

import testmin from "../assets/img/book.png"

class Catalog extends Component{
    render(){
        return(
            <div>
                
    
<div class="catalog">
    <div class="container">
        <div class="wrapper">            
            <div class="title">Каталог</div>
            <div class="content">
                <div class="book">
                    <img src={testmin} alt=""></img>
                    <div class="book_title">
                        <div class="book_name">Повелитель</div>
                        <div class="book_subname">Overlord</div>
                    </div>
                </div>
            
            </div>
            <div class="sortBar">
                    <div class="sortBar_item sort">
                        <div class="text">Сортировать</div>
                        <button class="btn_drop">по дате добавления</button>
                        {/* <div class="apper">
                            <input type="radio" id="html" name="fav_language" value="по дате добавления">
                            <label for="html">по дате добавления</label><br>
                            <input type="radio" id="html" name="fav_language" value="по названию">
                            <label for="html">по названию</label><br>
                            <input type="radio" id="html" name="fav_language" value="по рейтингу">
                            <label for="html">по рейтингу</label><br>
                        </div> */}
                    </div>
                    <div class="sortBar_item genre">
                        <div class="text">Жанр</div>
                        <button class="btn_drop">Триллер</button>
                    </div>
                    <div class="sortBar_item country">
                        <div class="text">Страна</div>
                        <button class="btn_drop">Япония</button>
                    </div>
                    <div class="sortBar_item status-title">
                        <div class="text">Статус тайтла</div>
                        <button class="btn_drop">онгоинг</button>
                    </div>
                    <div class="sortBar_item status-translate">
                        <div class="text">Статус перевода</div>
                        <button class="btn_drop">продолжается</button>
                    </div>
                    <div class="sortBar_item old">
                        <div class="text">Год издания</div>
                        <button class="btn_drop">за все время</button>
                    </div>

                <div class="navigat">   
                        <button class="btn show">Показать</button>
                        <button class="btn reset">Сбросить</button>
                </div>

            </div>
        </div>
    </div>
</div>
            
                
            </div>
        )
    }
}

export default Catalog;



