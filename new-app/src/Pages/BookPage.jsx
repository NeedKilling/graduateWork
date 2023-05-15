import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { setBooks } from '../redux/actions/books';

import axios from 'axios'
import { useDispatch } from 'react-redux';

import {BookMarkInPage} from '../component'
import star from "../assets/icons/star.svg"


function BookPage() {
    const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
    const {name} = useParams()
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     axios.get(`http://localhost:3000/db.json/${id}`).then((data) =>{
    //     setDescription(data)
    // },[id])})   

    // console.log(items)
    
  return (

    <div>
       <div className="Page">    
    <section className="bookPage">
        <div className="background" style ={{backgroundImage: `url(${items[id].backgroundImage})`}}></div>    
            <div className="container">
                <div className="wrapper">
                    <div className="bookPage_right">
                        <div className="bookPage_img"><img src={items[id].imageUrl} alt=""></img></div>
                        <Link to={`/Book/${id}/${name}`} className="bookPage_link continue">Читать</Link>
                        <BookMarkInPage/>    
                    </div>
                    <div className="bookPage_left">
                        <div className="head">
                            <div className="title">
                                <div className="name">{items[id].name}/</div>
                                <div className="subName">{items[id].subName}</div>
                            </div>
                            <div className="rating">
                                <img src={star} alt=""></img>
                                <div className="number">{items[id].rating}</div>
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
                                    <div className="content_item">{items[id].datarelize}</div>
                                    <div className="content_item">{items[id].country}</div>
                                    <div className="content_item">{`${items[id].genre}`}</div>
                                    
                                    <div className="content_item">{items[id].author}</div>
                                    <div className="content_item">{items[id].artist}</div>
                                    <div className="content_item">{items[id].publisher}</div>
                            </div>
                            </div>
                            <div className="description">
                                {items[id].description}
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