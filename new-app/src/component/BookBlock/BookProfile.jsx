import React from 'react'
import { Link } from 'react-router-dom'

function BookProfile({id,name,subName,imageurl,type}) {

  return (
    <div className="content_item">
    <Link to={`/Book/${id}`} className="img"><img src={imageurl} alt="book"></img></Link>
     <div className="text">
         <Link to={`/Book/${id}`} class="name">{name}</Link>
         <div className="subName">{subName}</div>
         <Link to = {`/Book/${id}/${name}`}><button className="continue">{type}</button></Link>
     </div>
 </div>
  )
}

export default BookProfile