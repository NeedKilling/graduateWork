import React from 'react'
import { useNavigate } from 'react-router-dom'


function BookCatalog({name,subName,imageUrl}) {
  const navigate = useNavigate()
  const clickLink =()=>{
      
      navigate(`/${subName.split(' ').join('-')}`)
  }
  return (
    <div onClick = {clickLink} className="book">
        <img src={imageUrl} alt=""></img>
        <div className="book_title">
            <div className="book_name">{name}</div>
            <div className="book_subname">{subName}</div>
            <div className = "tooltipText">{name}</div>
        </div>
    </div>
  )
}

export default BookCatalog