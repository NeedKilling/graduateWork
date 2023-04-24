import React from 'react'



function BookCatalog({name,subName,imageUrl}) {

  return (
    <div className="book">
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