

import React from 'react';
import {Component} from 'react';
import {SortBar, Sort, BookBlock} from '../component';

import testmin from "../assets/img/book.png"


function Catalog ({items}){
        
    
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
               {
                items.map(obj => (
                    // <BookBlock
                    // key = {obj.id} 
                    // name = {obj.name} 
                    // subName={obj.subName} 
                    // image = {obj.imageUrl}
                    // />
                    <div key = {obj.id}  className="book">
                        <img src={obj.imageUrl} alt=""></img>
                        <div className="book_title">
                            <div className="book_name">{obj.name}</div>
                            <div className="book_subname">{obj.subName}</div>
                            <div className = "tooltipText">{obj.name}</div>
                        </div>
                    </div>
                ))
               }     
            </div>
            <SortBar/>
        </div>
    </div>
</div>
            
                
            </div>
        )
    
}

export default Catalog;



