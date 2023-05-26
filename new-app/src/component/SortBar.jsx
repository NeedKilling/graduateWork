import React from 'react'
import { useSelector } from 'react-redux';

const SortBar = React.memo(function SortBar({country,activeSort,onClickSortBarName,genre,onClickSortBarGenre,activeSortGenre}) {

    const switchActive = (index) =>{
        onClickSortBarName(index)
    }
    const switchActiveGenre = (index) =>{
        onClickSortBarGenre(index)
    }

  return (
    <div className="sortBar">
                    <div className="sortBar_item">
                        <div className="text">Жанр</div>
                        <div className="check">
                           
                            <div onClick = {() => switchActiveGenre(null)} 
                                        className={activeSortGenre === null ? 'check_item check_item_active' : 'check_item'}>Все
                                    </div>
                                    {
                                    genre.map((name,index)=>
                                    <div 
                                        key={`${name}_${index}`}
                                        onClick={() => switchActiveGenre(name)}
                                        className={activeSortGenre === name ? 'check_item check_item_active' : 'check_item'}>
                                        {name}
                                    </div>
                                        
                                    )
                                    }
                            </div>
                        
                    </div>
                    <div className="sortBar_item country">
                        <div className="text">Страна</div>
                        <div className="check">
                            <div onClick = {() => switchActive(null)} 
                                className={activeSort === null ? 'check_item check_item_active' : 'check_item'}>Все
                            </div>
                            {
                            country.map((name,index)=>
                            <div 
                                key={`${name}_${index}`}
                                onClick={() => switchActive(name)}
                                className={activeSort === name ? 'check_item check_item_active' : 'check_item'}>
                                {name}
                            </div>
                                
                            )
                            }
                        </div>
                    </div>
    </div>
  )
}
)
export default SortBar;