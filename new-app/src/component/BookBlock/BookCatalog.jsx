import React from 'react'



function BookCatalog({name,subname,imageurl}) {

  return (
    <div className="book">
        <img src={imageurl} alt=""></img>
        <div className="book_title">
            <div className="book_name">{name}</div>
            <div className="book_subname">{subname}</div>
            <div className = "tooltipText">{name}</div>
        </div>
    </div>
  )
}

export default BookCatalog