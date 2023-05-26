import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchBooksHome } from '../redux/actions/books';
import { addBooksProfile } from '../redux/actions/profieList';

import axios from 'axios'
import { useDispatch } from 'react-redux';

import {BookMarkInPage} from '../component'
import star from "../assets/icons/star.svg"


function BookPage() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
    //////
    // const addBook = (arr) => {
    //     dispatch(addBookProfile(arr))
    // }
    /////

    const [rquest,setRquest] = React.useState([])

    

    const onClickAddBooks = (obj)=>{
        dispatch({
            type: "ADD_BOOKS_PROFILE",
            payload: obj,
        })
    }


    React.useEffect(()=>{
        dispatch(fetchBooksHome());
        (async () => {
            const quest = await axios.get(`/book/${id}`)
            setRquest(quest.data)
        })()
        
    },[])

  return (

    <div>
       <div className="Page">    
    <section className="bookPage">
        <div className="background" style ={{backgroundImage: `url(${rquest.backgroundimage})`}}></div>    
            <div className="container">
                <div className="wrapper">
                    <div className="bookPage_right">
                        <div className="bookPage_img"><img src={rquest.imageurl} alt=""></img></div>


                        
                        {/* <button onClick={addBook(items)} style={{color: 'red', background:'green', padding:'20px', borderRadius:'10px'}}>Клик</button> */}
                        {/* <button onClick={()=>onClickAddBook([rquest.id,rquest.name,rquest.subName])} style={{color: 'red', background:'green', padding:'20px', borderRadius:'10px'}}>Клик</button> */}



                        <Link to={`/Book/${id}/${rquest.name}`} className="bookPage_link continue">Читать</Link>
                        <BookMarkInPage id={rquest.id} name={rquest.name} subName={rquest.subname} imageurl={rquest.imageurl} onClickAddBook={onClickAddBooks}/>    
                    </div>
                    <div className="bookPage_left">
                        <div className="head">
                            <div className="title">
                                <div className="name">{rquest.name}/</div>
                                <div className="subName">{rquest.subname}</div>
                            </div>
                            <div className="rating">
                                <img src={star} alt=""></img>
                                <div className="number">{rquest.rating}</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="wrapper">
                                <div className="block">
                                    <div className="content_item">Год выпуска</div>
                                    <div className="content_item">Страна</div>
                                    <div className="content_item">Жанр</div>
                                    <div className="content_item">Автор</div>
                                    <div className="content_item">Художник</div>
                                    <div className="content_item">Издательсво</div>
                                </div>
                            <div className="block">
                                    <div className="content_item">{rquest.datarelize ? rquest.datarelize : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.country : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.genre : "-"}</div>     
                                    <div className="content_item">{rquest.datarelize ? rquest.author : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.artist : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.publisher : "-"}</div>
                            </div>
                            </div>
                            <div className="description">
                                {rquest.description}
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    </section>
</div>
        
    </div>
  )
}


export default BookPage