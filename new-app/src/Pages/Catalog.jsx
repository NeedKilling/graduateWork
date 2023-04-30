

import React from 'react';
import {SortBar, Sort, BookBlock} from '../component';
import BookCatalog from '../component/BookBlock/BookCatalog';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Catalog (){
    const {items} = useSelector((state) => {
        return {
          items : state.Books.items,
          sortBy: state.filtres.sortBy
        };
      });
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
                    // />                  ${obj.subName.split(' ').join('-')}
                    <Link key = {obj.id} to = {`/db.json/${obj.id}`} {...obj} >
                    <BookCatalog key = {obj.id} {...obj}/></Link>
                    
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



