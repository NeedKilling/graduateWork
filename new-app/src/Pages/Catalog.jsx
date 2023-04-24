

import React from 'react';
import {SortBar, Sort, BookBlock} from '../component';
import BookCatalog from '../component/BookBlock/BookCatalog';
import store from '../redux/store';

function Catalog ({items}){
        
        return(
            <div>
                
    
<div className="catalog">
    <div className="container">
        <div className="wrapper">            
            <div className="catalog_head">
                <div className="title">Каталог</div>
                <Sort items={[{name: "популярности",type:'popular'},{name: "алфавиту",type: "alphabet"},{name: "дате релиза",type: "data"}]} />
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
                    
                    <BookCatalog key = {obj.id} {...obj}/>
                    
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



