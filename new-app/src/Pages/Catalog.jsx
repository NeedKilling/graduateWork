

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

    const SortName = [{name: "популярности",type:'popular'},{name: "алфавиту",type: "alphabet"},{name: "дате релиза",type: "data"}]
      
        return(
            <div>
                
    
<div className="catalog">
    <div className="container">
        <div className="wrapper">            
            <div className="catalog_head">
                <div className="title">Каталог</div>
                <Sort items={SortName} />
            </div>
            
            
            <div className="content"> 
               {
               
               items.map(obj => (
                    <Link key = {obj.id} to = {`/Book/${obj.id}`} {...obj} >
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



