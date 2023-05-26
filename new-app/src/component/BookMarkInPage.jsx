import React from 'react'
import ClassNames from "classnames"
import drop from "../assets/icons/drop.svg"

function BookMarkInPage({id,name,subName,imageurl,onClickAddBook}) {
        
    const category = ["Читаю","В планах","Прочитано","Любимое","Брошено"];

    const [visibleDrop , setVisibleDrop] = React.useState(false)
    const DropRef = React.useRef();
    const [activeDrop, setActiveDrop] = React.useState()
    
    const activeNameDrop = category[activeDrop] // предмет[0]
    console.log(activeNameDrop)
   
        const taggleDrop = () => {
            setVisibleDrop(!visibleDrop)
        }
        const handleOutClick = (e)=>{
            if (e.target !== DropRef.current){
                setVisibleDrop(false)
            }      
        }
    
    const deleteName = ()=>{
        setActiveDrop()
    }
        
    


    React.useEffect(() => {
        document.addEventListener('click' , handleOutClick);
    },[]);
    const switchActive = (index) =>{
        setActiveDrop(index)
        const object = {
            id,
            name,
            subName,
            imageurl,
            type: category[index]
        }
        onClickAddBook(object) 
    }

  return (
    <div className="bookPage_dropdown">
        <div ref = {DropRef} onClick={taggleDrop} 
            className={
                ClassNames(
                    activeNameDrop === "Читаю" ? "mark read":"mark",
                    activeNameDrop === "В планах" ? "mark inPlan":"",
                    activeNameDrop === "Прочитано" ? "mark viewed":"",
                    activeNameDrop === "Любимое" ? "mark favorite":"",
                    activeNameDrop === "Брошено" ? "mark abandoned":"",
                )}>

            <div className='text'>
                {activeNameDrop === undefined ? "Добавить в": activeNameDrop} 
            </div>
            <img className={visibleDrop?"img active":"img"} src={drop} alt=""></img>
        </div>
        {
            visibleDrop && (<ul className='dropdown_ul'> {/*скрытие и появление выпадаюшего меню*/}
                {                    
                    category.map((name,index) =>
                    <li key={`${name}_${index}`}
                    onClick={()=>switchActive(index)}
                    className={activeDrop === index ? "dropdown_ul__item dropdown_ul__item_active" : "dropdown_ul__item"}>
                    {name}
                    </li>)
                }
                {
                    activeNameDrop && (<li onClick={deleteName}className='dropdown_ul__item dropdown_ul__item_delete'>Удалить из списка</li>) // удаление при выборе
                }
            </ul>)
        }
            
    </div>
  )
}

export default BookMarkInPage