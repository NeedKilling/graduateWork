import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Sort = React.memo(function Sort({items,activeSortType,onClickSortType}) {

    const [visibleSort , setvisibleSort] = useState(false)
    const sortRef = useRef();
    
    const activeName = items.find((obj) => obj.type === activeSortType).name // предмет[0]

    const switchActive = (index) =>{
        if(onClickSortType){
            onClickSortType(index)
        }
    }

        const taggleSort = () => {            // показ/скрытие выпадающего меню
            setvisibleSort(!visibleSort)
        }

        const handleOutClick = (e)=>{
            if (e.target !== sortRef.current){
                setvisibleSort(false)
            }
            
            
        }

    useEffect(() => {
        document.addEventListener('click' , handleOutClick);
    },[]);


  return (
        <div>
            <div  className="catalog_sort">
                <div className="text">Сортировать по</div>
                <button ref ={sortRef} onClick={taggleSort} className="btn_drop">{activeName}</button>
            </div>
            {visibleSort && (<div className="catalog_drop">
                {
                items && items.map((object,index) => 
                
                (<div onClick={()=>switchActive(object)} 
                key={`${object.type}_${index}`} 
                className={activeSortType === object.type ? 'catalog_drop_item active': "catalog_drop_item"}>

                {object.name}
                </div>)
)}
            </div>
            )}
        </div>
  )
}
)

Sort.propTypes = {
    activeSortType: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickSortType: PropTypes.func.isRequired,
  };

Sort.defaultProps = {
    items: [],
}

export default Sort;