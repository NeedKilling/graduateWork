import React,{ useState } from 'react'


const Categorias = React.memo(
  function Categorias ({activeCategorias,items,onClickItem}){
    
    
    const selectState = (index) => {
      onClickItem(index)
    }
  
      return (
         
           <ul className="profile_list">
  
              <li onClick = {() => selectState(null)} 
              className={activeCategorias === null ? 'item item_active' : 'item'}>Все</li>            
              {
                items && items.map((name,index)=><li 
  
                onClick = {()=> selectState(index)}
  
                key={`${name}_${index}`} 
  
                className={activeCategorias === index ? 'item item_active': 'item'}>{name}
  
                </li>)
              }
              <div>
        
      </div>
          </ul>
         
        )
    
  }
)

export default Categorias;