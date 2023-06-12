import React from 'react'
import { useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom';

import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setAddedCategorias } from '../redux/actions/filtres';

import {BookMarkInPage} from '../component'
import star from "../assets/icons/star.svg"
import { AuthContext } from '../hoc/AuthProvider';

function BookPage() {
    const {user} = React.useContext(AuthContext)

    const dispatch = useDispatch()
    //const items = useSelector((state) => state.Books.items);
    const {id} = useParams()
    
    const {addedCategorias} = useSelector(({filtres}) => filtres)
    const [rquest,setRquest] = React.useState([])

    
    const onAddedCategorias = React.useCallback((index) => {
        dispatch(setAddedCategorias(index));
    },[]);

    const onClickAddBooks = (obj)=>{
        dispatch({
            type: "ADD_BOOKS_PROFILE",
            payload: obj,
        })
    }


    React.useEffect(()=>{
        //dispatch(fetchBooksHome());
        //dispatch(fetchBooksPage(id))
        (async () => {
            const quest = await axios.get(`/book/${id}`)
            setRquest(quest.data)
        })()
        
    },[])

  return (

    <div>
       <div className="Page">    
    <section className="bookPage">
        <div className="background" style ={{backgroundImage: `url(${rquest.backgroundimage})`}}></div>    
            <div className="container">
                <div className="wrapper">
                    <div className="bookPage_right">
                        <div className="bookPage_img"><img src={rquest.imageurl} alt=""></img></div>
                        <Link to={user.email ? `/Book/${id}/${rquest.name}` : `/LogIn`} className="bookPage_link continue">Читать</Link>

                        <BookMarkInPage 
                            id={rquest.id} 
                            name={rquest.name} 
                            subName={rquest.subname} 
                            imageurl={rquest.imageurl} 
                            onClickAddBook={onClickAddBooks}
                            onAddedCategorias = {onAddedCategorias}
                            activeCategorias = {addedCategorias}
                            user = {user.email}
                        />

                    </div>
                    <div className="bookPage_left">
                        <div className="head">
                            <div className="title">
                                <div className="name">{rquest.name}/</div>
                                <div className="subName">{rquest.subname}</div>
                            </div>
                            <div className="rating">
                                <img src={star} alt=""></img>
                                <div className="number">{rquest.rating}</div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="wrapper">
                                <div className="block">
                                    <div className="content_item">Год выпуска</div>
                                    <div className="content_item">Страна</div>
                                    <div className="content_item">Жанр</div>
                                    <div className="content_item">Автор</div>
                                    <div className="content_item">Художник</div>
                                    <div className="content_item">Издательсво</div>
                                </div>
                            <div className="block">
                                    <div className="content_item">{rquest.datarelize ? rquest.datarelize : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.country : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.genre : "-"}</div>     
                                    <div className="content_item">{rquest.datarelize ? rquest.author : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.artist : "-"}</div>
                                    <div className="content_item">{rquest.datarelize ? rquest.publisher : "-"}</div>
                            </div>
                            </div>
                            <div className="description">
                                {rquest.description}
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    </section>
</div>
        
    </div>
  )
}


export default BookPage