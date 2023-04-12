

import React from 'react';
import {Component} from 'react';

import testmin from "../assets/img/book.png"
import SortBar from '../component/SortBar';

class Catalog extends Component{
    render(){
        return(
            <div>
                
    
<div class="catalog">
    <div class="container">
        <div class="wrapper">            
            <div class="catalog_head">
                <div class="title">Каталог</div>
                <div class="catalog_sort">
                    <div class="text">Сортировать</div>
                    <button class="btn_drop">по дате добавления</button>
                </div>
            </div>
            
            
            <div class="content">
                <div class="book">
                    <img src={testmin} alt=""></img>
                    <div class="book_title">
                        <div class="book_name">Повелитель</div>
                        <div class="book_subname">Overlord</div>
                    </div>
                </div>
            
            </div>
            <SortBar
            items = {{
                "Сортировать": "по алфавиту",
                "Жанр" : "триллер",
                "Страна": "Япония",
                "Год издания" : "за все время"
            }}/>
        </div>
    </div>
</div>
            
                
            </div>
        )
    }
}

export default Catalog;



