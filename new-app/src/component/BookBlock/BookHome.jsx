import React from 'react'
import ProtoTypes from "prop-types"
import { Link } from 'react-router-dom'
import {BookMark} from '../../component'
import star from "../../assets/icons/star.svg"
import { useDispatch } from 'react-redux'
import { setCategorias } from '../../redux/actions/filtres'


function BookHome({id,name,imageUrl,subName,rating,description}) {
    
    

  return (
    <div className="book">
        <div className="book-item">
            <div className="rating">
                <img src={star} alt="star" className="star"></img>
                <p className="rating-text">{rating}</p>
            </div>
            <div className="book-item__top">
                <div className="book-item__left"><Link to = {`/Book/${id}`}><img src={imageUrl} alt="book"></img></Link></div>
                <div className="book-item__right">
                    <div className="right-title"><Link  to = {`/Book/${id}`}>
                        <div className = "right-title_name">{name}</div>
                        </Link><div className='right-title_subName'>{subName}</div>
                    </div>
                    <div className="right-description">{description}</div>
                    
                </div>
            </div>
            <div className="book-item__bottom">
                <a href="#" className="read">Читать</a>
                {/* <BookMark /> */}
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