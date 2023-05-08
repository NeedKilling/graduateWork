import React, { useEffect } from 'react'
import { useState, useRef } from 'react';

const Sort = React.memo(function Sort({items}) {

    const [visibleSort , setvisibleSort] = useState(false)
    const sortRef = useRef();
    const [activeSort, setActiveSort] = useState(0)
    
    const activeName = items[activeSort].name // предмет[0]


    const switchActive = (index) =>{
        setActiveSort(index)
    }

        const taggleSort = () => {
            setvisibleSort(!visibleSort)
        }

        const handleOutClick = (e)=>{
            if (e.target !== sortRef.current){
                setvisibleSort(false)
            }
            
            
        }

    useEffect(() => {
        document.addEventListener('click' , handleOutClick);
        console.log(sortRef.current)
    },[]);


  return (
        <div>
            <div  className="catalog_sort">
                <div className="text">Сортировать по</div>
                <button ref ={sortRef} onClick={taggleSort} className="btn_drop">{activeName}</button>
            </div>
            {visibleSort && (<div className="catalog_drop">
                {
                items && items.map((object,index)=><div onClick={()=>switchActive(index)} 
                key={`${object.type}_${index}`} 
                className={activeSort === index ? 'catalog_drop_item active': "catalog_drop_item"}>

                {object.name}
                </div>)
                }
            </div>
            )}
        </div>
  )
}
)


export default Sort;