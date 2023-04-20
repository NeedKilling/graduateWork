import React from 'react'
import bookmark from "../assets/icons/mark.svg"

function BookMark({items}) {


    const [visibleMark , setVisibleMark] = React.useState(false)
    const MarkRef = React.useRef();
    const [activeMark, setActiveMark] = React.useState()
    
    const activeNameMark = items[activeMark] // предмет[0]


    const switchActive = (index) =>{
        setActiveMark(index)
    }

        const taggleMark = () => {
            setVisibleMark(!visibleMark)
        }

        const handleOutClick = (e)=>{
            if (e.target !== MarkRef.current){
                setVisibleMark(false)
            }
            
            
        }

    React.useEffect(() => {
        document.addEventListener('click' , handleOutClick);

    },[]);

  return (
    

    
    <div className="book-dropdown">
        <button ref = {MarkRef} onClick={taggleMark} className="mark"><img src={bookmark} alt="mark"></img>{activeNameMark}</button>
            {visibleMark && (<ul className="dropdown-ul">
                {
                items && items.map((name,index)=>
                
                <li onClick={()=>switchActive(index)} 
                key={`${name}_${index}`} 

                className={activeMark === index ? 'dropdown-ul__item dropdown-ul__item_active': "dropdown-ul__item"}>

                {name}
                </li>)
                }
            </ul>
            )}
    </div>
)
}

export default BookMark