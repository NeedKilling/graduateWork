import React from 'react'

function Pagination({textForPage,totalTEXT, paginat,nextText,prevText,currentPage}) {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalTEXT / textForPage); i++){
        pageNumbers.push(i)
    }

    console.log(currentPage)
    


    const showAfterFirst = currentPage < 5;
    const showBeforeLast = currentPage > pageNumbers.length- 4;
  
    const buttons = (num, base) => [...Array(num)].map((n, i) => base + i);
    const buttonsToRender = pageNumbers.length > 8
      ? [
          1,
          showAfterFirst && buttons(4, 2),
          !showAfterFirst && '...',
          !(showAfterFirst || showBeforeLast) && buttons(3, currentPage - 1),
          !showBeforeLast && '...',
          showBeforeLast && buttons(4, pageNumbers.length - 4),
          pageNumbers.length,
        ].flat().filter(Boolean)
      : buttons(pageNumbers.length, 1);


  return (
    <div className='Pagination'>
        <div className="block">
            <a href="#" onClick={prevText} className = {currentPage === 1 ? "block_number arrow disabled" : "block_number arrow"}>{"<"}</a>
            <dib className="wrapper"> 
            {
                // pageNumbers.map((number,index) => (
                //     <a href='#' className={index+1 === currentPage ? 'block_number active' : 'block_number'} key = {number}  onClick={() => paginat(number)}>{number}</a>
                // ))
                buttonsToRender.map((number,index) => 
                    number === '...' ? <div className='block_number'>{'...'}</div> : 

                    (
                    <a href='#' className={number === currentPage ? 'block_number active' : 'block_number'} key = {number}  onClick={() => paginat(number)}>{number}</a>
                    )
                )
            
            }
            </dib>
            <a href="#" onClick={nextText} className = {currentPage >= pageNumbers.length ? "block_number arrow disabled" : "block_number arrow"}>{">"}</a>
        </div>
    </div>
  )
}

export default Pagination