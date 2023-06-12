

import React from 'react';
import {SortBar, Sort, LoadingCatalog} from '../component';
import BookCatalog from '../component/BookBlock/BookCatalog';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, fetchBooksCatalog } from '../redux/actions/books';
import {setSortBy, setSortByBar,setSortByBarGenre} from "../redux/actions/filtres"

function Catalog (){
    const dispatch = useDispatch();
    const items = useSelector((state) => state.Books.items)
    const isLoaded = useSelector((state) => state.Books.isLoaded)
    const {sortBy,sortByBar,sortByBarGenre} = useSelector(({filtres}) => filtres);     

    React.useEffect(()=>{
        dispatch(fetchBooksCatalog(sortBy,sortByBar,sortByBarGenre))
    },[sortBy,sortByBar,sortByBarGenre]);

    const onClickSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    },[]);

    const onClickSortBarName = React.useCallback((name)=>{
        dispatch(setSortByBar(name))
    },[])
    
    const onClickSortBarGenre = React.useCallback((name)=>{
        dispatch(setSortByBarGenre(name))
    },[])

    const SortName = [
        {name: "рейтингу",type:'rating',order:'desc'},
        {name: "алфавиту",type: "name", order:'asc'},
        {name: "дате релиза(↗)",type: "datarelize",order:'desc'},
    ]
    const SortCountry = ["Япония","Корея","Китай"]
    const SortGenre = ["фентези","комедия","романтика","боевик","драма","триллер","фантастика","ужасы"]
      
    const [valueSearh,setValueSearh] = React.useState('')

    const filtresBooks = items.filter(book => {
       return book.name.toLowerCase().includes(valueSearh.toLowerCase()) || book.subname.toLowerCase().includes(valueSearh.toLowerCase())
   })
   const reset = () =>{
    setValueSearh('')
    }   
        return(
            <div>
<div className="catalog">
    <div className="container">
        <div className="wrapper">            
            <div className="catalog_head">
                {/* <div className="title">Каталог</div> */}

                    <div className="searh">
                        <form className="searh_form">
                            <input value = {valueSearh} onChange = {(e)=>setValueSearh(e.target.value)} type="text" placeholder="Поиск по названию..."></input>
                            <div onClick={reset} className="clear"></div>
                        </form>
                    </div>

                <Sort activeSortType = {sortBy.type} items={SortName} onClickSortType={onClickSortType} />
            </div>
            <div className="content"> 
               {
               isLoaded ? filtresBooks.map((obj,index) => (
                    <Link key = {`${obj.name}_${index}`} to = {`/Book/${obj.id}`} {...obj} >
                    <BookCatalog key = {`${obj.name}_${index}`} isLoading = {true} {...obj}/></Link> 
                )) : Array(5).fill(<LoadingCatalog/>)
               } 
              
            </div>
            <SortBar 
                activeSort = {sortByBar} 
                country = {SortCountry} 
                onClickSortBarName = {onClickSortBarName}
                activeSortGenre = {sortByBarGenre}
                genre = {SortGenre}
                onClickSortBarGenre = {onClickSortBarGenre} 
            />
        </div>
    </div>
</div>            
            </div>
        )
    
}
export default Catalog;



