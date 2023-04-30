import React from 'react'
import bookmark from "../assets/icons/mark.svg"

function BookMark() {

const category = ["Читаю","В планах","Прочитано","Любимое","Брошено"];

    const [visibleMark , setVisibleMark] = React.useState(false)
    const MarkRef = React.useRef();
    const [activeMark, setActiveMark] = React.useState()
    
    const activeNameMark = category[activeMark] // предмет[0]


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
        <button ref = {MarkRef} onClick={taggleMark} className="mark">
            <img src={bookmark} alt="mark"></img>{activeNameMark === undefined ? "Добавить в": activeNameMark}
        </button>

            {visibleMark && (<ul className="dropdown-ul">
                {
                category.map((name,index)=>
                <li key={`${name}_${index}`} 
                onClick={()=>switchActive(index)} 
        
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