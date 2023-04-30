import React from 'react'

function BookProfile({name,subName,imageUrl}) {

  return (
    <div class="content_item">
    <div class="img"><img src={imageUrl} alt="book"></img></div>
     <div class="text">
         <a href="#" class="name">{name}</a>
         <div class="subName">{subName}</div>
         <button class="continue">Продолжить</button>
     </div>
 </div>
  )
}

export default BookProfile