

import React from 'react';
import {Component} from 'react';
import {SortBar, Sort} from '../component';

import testmin from "../assets/img/book.png"


class Catalog extends Component{
    render(){
        return(
            <div>
                
    
<div className="catalog">
    <div className="container">
        <div className="wrapper">            
            <div className="catalog_head">
                <div className="title">Каталог</div>
                <Sort items={["популярности", "алфавиту","дате релиза"]} />
            </div>
            
            
            <div className="content">
                <div className="book">
                    <img src={testmin} alt=""></img>
                    <div className="book_title">
                        <div className="book_name">Повелитель</div>
                        <div className="book_subname">Overlord</div>
                    </div>
                </div>
            
            </div>
            <SortBar/>
        </div>
    </div>
</div>
            
                
            </div>
        )
    }
}

export default Catalog;



