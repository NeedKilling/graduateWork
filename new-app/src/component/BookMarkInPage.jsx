import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardDoubleArrowUp} from "react-icons/md"

const BookMarkInPage = React.memo(
    function BookMarkInPage({user,id,name,subName,imageurl,onClickAddBook,onAddedCategorias,activeCategorias}) {
    
        const items = useSelector(({Profile}) => Profile.items); 

        const category = ["Читаю","В планах","Прочитано","Любимое","Брошено"];
    
        const [visibleDrop , setVisibleDrop] = React.useState(false)
        const DropRef = React.useRef();
        const textRef = React.useRef();
        let [activeDrop, setActiveDrop] = React.useState()

        let activeNameDrop = category[activeDrop] // предмет[0]
       
            const taggleDrop = () => {

                setVisibleDrop(!visibleDrop)
            }
            const handleOutClick = (e)=>{
                if (e.target !== textRef.current){
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
<>       
        {
            user ? 
            <>
                <div className="bookPage_dropdown">
                    
                    <div className='mark'>
                        {/* // className={
                        //     ClassNames(
                        //         activeNameDrop === undefined ? "mark":"",
                        //         activeNameDrop === "Читаю" ? "mark read":"",
                        //         activeNameDrop === "В планах" ? "mark inPlan":"",
                        //         activeNameDrop === "Прочитано" ? "mark viewed":"",
                        //         activeNameDrop === "Любимое" ? "mark favorite":"",
                        //         activeNameDrop === "Брошено" ? "mark abandoned":"",
                        //     )} */}
                        <div onClick={taggleDrop} ref = {textRef} className='text'>
                            {activeNameDrop === undefined ? "Добавить в": activeNameDrop} 
                        </div>
                        <MdOutlineKeyboardDoubleArrowUp className={visibleDrop?"img active":"img"}/>
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
                            {/* {
                                activeNameDrop && (<li onClick={deleteName}className='dropdown_ul__item dropdown_ul__item_delete'>Удалить из списка</li>) // удаление при выборе
                            } */}
                        </ul>)
                    }
                        
                </div>
            </> : 
            
            <>
                <Link to = {"/LogIn"} className="bookPage_dropdown">
                    
                    <div className='mark'>
                        <div className='text'>
                           Добавить в
                        </div>
                    </div>
                </Link>
            </>
        }
            
            
        
</>       
      )
    }

)

export default BookMarkInPage