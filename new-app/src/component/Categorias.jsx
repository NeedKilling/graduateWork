import React,{ useState } from 'react'


function Categorias ({items}){
  const [activeState,setActiveState] = useState(null);
  
  const selectState = (index) => {
    setActiveState(index);
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

export default Categorias;