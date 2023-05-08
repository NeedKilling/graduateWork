import React,{ useState } from 'react'


const Categorias = React.memo(
  function Categorias ({items,onClickItem}){
    const [activeState,setActiveState] = useState(null);
    
    const selectState = (index) => {
      setActiveState(index);
      onClickItem(index)
    }
  
      return (
         
           <ul class="profile_list">
  
              <li onClick = {() => selectState(null)} 
              className={activeState === null ? 'item item_active' : 'item'}>Все</li>
              {
                items && items.map((name,index)=><li 
  
                onClick = {()=> selectState(index)}
  
                key={`${name}_${index}`} 
  
                className={activeState === index ? 'item item_active': 'item'}>{name}
  
                </li>)
              }
              <div>
        
      </div>
          </ul>
         
        )
    
  }
)

export default Categorias;