import React, { useEffect } from 'react'
import { useState, useRef } from 'react';

function Sort() {

    const [visibleSort , setvisibleSort] = useState(false)
    const sortRef = useRef();
    

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
                <button ref ={sortRef} onClick={taggleSort} className="btn_drop">популярности</button>
            </div>
            {visibleSort && <div className="catalog_drop">
                                 <div className='catalog_drop_item'>популярности</div>
                                 <div className='catalog_drop_item'>алфавиту</div>
                                 <div className='catalog_drop_item'>дате релиза</div>
                             </div>
            }
        </div>
  )
}



export default Sort;