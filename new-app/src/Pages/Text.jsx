import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Pagination } from '../component';

function Text() {
    const dispatch = useDispatch();
    // const textItems = useSelector((state) => state.text.textItems);
    const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
    const {name} = useParams()

    const [TEXT,setTEXT] = React.useState([])                 //  текст
    const [currentPage,setCurrentPage] = React.useState(1)   //  текущая страница
    const [textForPage] = React.useState(30)                //  количество выводимых строк

    //const nameBOOK = items.find((BOOK)=>BOOK.id===1)

    React.useEffect(() => {
          const getText = async()=>{
            if(name === "Немёртвый бывший генерал"){
              const TEXT = await axios.get(`http://localhost:3001/FormerGeneralIsUndeadKnight`)
              setTEXT(TEXT.data)
            }else if(name === "Повелитель"){
              const TEXT = await axios.get(`http://localhost:3001/Overlord`)
              setTEXT(TEXT.data)
            }else if(name === "Каждый возвращается домой"){
              const TEXT = await axios.get(`http://localhost:3001/EveryoneElseisaReturnee`)
              setTEXT(TEXT.data)
            }else if(name === "Поднятие уровня в одиночку"){
              const TEXT = await axios.get(`http://localhost:3001/Ialonelevelup`)
              setTEXT(TEXT.data)
            }else if(name === "Защита Подземелья"){
              const TEXT = await axios.get(`http://localhost:3001/DungeonDefense`)
              setTEXT(TEXT.data)
            }else if(name === "Точка зрения Всеведущего читателя"){
              const TEXT = await axios.get(`http://localhost:3001/OmniscientReadersViewpoint`)
              setTEXT(TEXT.data)
            }else if(name === "Ранкер который живет второй раз"){
              const TEXT = await axios.get(`http://localhost:3001/SecondLifeRanker`)
              setTEXT(TEXT.data)
            }else if(name === "Буря Звёздной Войны"){
              const TEXT = await axios.get(`http://localhost:3001/TempestoftheStellarWar`)
              setTEXT(TEXT.data)
            }else if(name === "Добро пожаловать в класс превосходства"){
              const TEXT = await axios.get(`http://localhost:3001/ClassroomoftheElite`)
              setTEXT(TEXT.data)
            }else if(name === "Мастер-охотник Kей"){
              const TEXT = await axios.get(`http://localhost:3001/MasterHunterK`)
              setTEXT(TEXT.data)
            }else if(name === "Да будет благословен этот прекрасный мир!"){
              const TEXT = await axios.get(`http://localhost:3001/God'sBlessingonThisWonderfulWorld!`)
              setTEXT(TEXT.data)
            }else if(name === "Владея Ничем"){
              const TEXT = await axios.get(`http://localhost:3001/PossessingNothing`)
              setTEXT(TEXT.data)
            }
          }
          getText()
    }, []);

    const lastTextIndex = currentPage * textForPage                    //  последний индекс элемента
    const firtTextIndex = lastTextIndex - textForPage                 //  первый индекс элемента
    const currentTextPage = TEXT.slice(firtTextIndex,lastTextIndex)  //  текущая страница с текстом 

    const paginat = pageIndex => setCurrentPage(pageIndex)
    const nextText = () => setCurrentPage(next => next+1)
    const prevText = () => setCurrentPage(prev => prev-1)
    
  return (
    <div className='TextInBook'>
      <div className='container'>

            <div className='title'>{name}</div>

         <div className='content'>
           {
            currentTextPage.map((obj,index) => (
              <p key = {index} className='text'>{obj.text}</p>
             ))        
           }
         </div>

          <Pagination 
          textForPage={textForPage} 
          totalTEXT={TEXT.length} 
          paginat = {paginat} 
          nextText={nextText} 
          prevText={prevText}
          currentPage = {currentPage}
          
          />
           
      </div>
    </div>
    
  )
}

export default Text