

import React from 'react';
import {SortBar, Sort, LoadingCatalog} from '../component';
import BookCatalog from '../component/BookBlock/BookCatalog';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, fetchBooksCatalog } from '../redux/actions/books';
import {setSortBy} from "../redux/actions/filtres"

function Catalog (){
    const dispatch = useDispatch();
    const items = useSelector((state) => state.Books.items)
    const isLoaded = useSelector((state) => state.Books.isLoaded)
    const {sortBy} = useSelector(({filtres}) => filtres);    


    React.useEffect(()=>{
        dispatch(fetchBooksCatalog(sortBy))
    },[sortBy]);

    const onClickSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    },[]);

    const SortName = [
        {name: "рейтингу",type:'rating',order:'desc'},
        {name: "алфавиту",type: "name", order:'asc'},
        {name: "дате релиза(↗)",type: "datarelize",order:'desc'},
        // {name: "дате релиза(↘)",type: "datarelize",order:'asc'}
    ]
      
        return(
            <div>
<div className="catalog">
    <div className="container">
        <div className="wrapper">            
            <div className="catalog_head">
                <div className="title">Каталог</div>
                <Sort activeSortType = {sortBy.type} items={SortName} onClickSortType={onClickSortType} />
            </div>
            <div className="content"> 
               {
               isLoaded ? items.map(obj => (
                    <Link key = {obj.id} to = {`/Book/${obj.id}`} {...obj} >
                    <BookCatalog key = {obj.id} isLoading = {true} {...obj}/></Link> 
                )) : Array(15).fill(<LoadingCatalog/>)
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



