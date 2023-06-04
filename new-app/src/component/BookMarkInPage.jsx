import React from 'react'
import ClassNames from "classnames"
import drop from "../assets/icons/drop.svg"
import { useSelector } from 'react-redux';
import { object } from 'prop-types';


const BookMarkInPage = React.memo(
    function BookMarkInPage({id,name,subName,imageurl,onClickAddBook,onAddedCategorias,activeCategorias}) {
    
        const items = useSelector(({Profile}) => Profile.items); 
         
        const category = ["Читаю","В планах","Прочитано","Любимое","Брошено"];
    
        const [visibleDrop , setVisibleDrop] = React.useState(false)
        const DropRef = React.useRef();
        let [activeDrop, setActiveDrop] = React.useState()

        let activeNameDrop = category[activeDrop] // предмет[0]
       
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
            onAddedCategorias(index)
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
                        activeNameDrop === undefined ? "mark":"",
                        activeNameDrop === "Читаю" ? "mark read":"",
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
)

export default BookMarkInPage