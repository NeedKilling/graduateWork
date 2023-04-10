import React from 'react'


function Categorias ({items,onClickItem}){
  // state = {
  //   activeItem : 3,
  // }
  // SelectItem = {

  // }
    return (
       
         <ul class="profile_list">

            <li class="item item_active">Все</li>
            {
              items.map((name,index)=><li 

              onClick = {()=> onClickItem(name)}

              key={`${name}_${index}`} 

              className='item'>{name}

              </li>)
            }
            
        </ul>
       
      )
  
}

export default Categorias;