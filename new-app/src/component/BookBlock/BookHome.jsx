import React from 'react'
import ProtoTypes from "prop-types"

import {BookMark} from '../../component'

import star from "../../assets/icons/star.svg"

function BookHome({name,imageUrl,subName,rating,description}) {
    
  return (
    <div className="book">
        <div className="book-item">
            <div className="rating">
                <img src={star} alt="star" className="star"></img>
                <p className="rating-text">{rating}</p>
            </div>
            <div className="book-item__top">
                <div className="book-item__left"><img src={imageUrl} alt="book"></img></div>
                <div className="book-item__right"><a href="#" className="right-title">{name}<br/><span>{subName}</span></a>
                    <div className="right-description">{description}</div>
                </div>
            </div>
            <div className="book-item__bottom">
                <a href="#" className="read">Читать</a>
                <BookMark/>
            </div>
        </div>
    </div>
  )
}

BookHome.prototype = {
    id: ProtoTypes.number,
    name: ProtoTypes.string,
    subName: ProtoTypes.string,
    imageUrl: ProtoTypes.string,
    rating: ProtoTypes.number,
    description: ProtoTypes.string

}

export default BookHome