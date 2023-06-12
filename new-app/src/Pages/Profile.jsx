
import React from 'react';
import Categorias from '../component/Categorias';
import { useSelector,useDispatch } from 'react-redux';
import profile_image from "../assets/icons/profile_big.svg"
import list from "../assets/icons/list.png"
import profile_back from "../assets/img/profile_back.jpg"

import BookProfile from '../component/BookBlock/BookProfile';
import {setCategorias} from "../redux/actions/filtres"
import { ClearProfile,removeProfileItem } from '../redux/actions/profieList';
import {  LoadingProfile } from '../component';
import { Link, redirect } from 'react-router-dom';
import { AuthContext } from '../hoc/AuthProvider';

function Profile(){
    
    const {user} = React.useContext(AuthContext)

    const dispatch = useDispatch();

    const items = useSelector(({Profile}) => Profile.items); //получение из редакса книг
    const isLoaded = useSelector((state) => state.Books.isLoaded)
    const {categorias} = useSelector(({filtres}) => filtres);//получение из редакса категорию
    const {totalCount} = useSelector(({Profile})=> Profile)

    let addedBooksProfile = Object.keys(items).map((key,index) => {
        console.log(items[key])
        return items[key][16] || items[key][15] || items[key][14] || items[key][13] || items[key][12] || items[key][11] || items[key][10] || 
        items[key][9] || items[key][8] || items[key][7] || items[key][6] ||
                items[key][5] || items[key][4] || items[key][3] || items[key][2] || items[key][1] || items[key][0]
        
    });
    console.log(addedBooksProfile)
      
    
    const onSelectCategorias = React.useCallback((index) => {
        dispatch(setCategorias(index));
    },[]);

        const categoriasName = ["Читаю","В планах","Прочитано","Любимое","Брошено"];
    
    
    const switchBooks = (categorias) => {
        const categoriasBooks = addedBooksProfile.filter(e => e.type === categoriasName[categorias])
        addedBooksProfile = categoriasBooks
    }

    switch(categorias){
        case 0: 
            switchBooks(categorias)
        break;
        case 1: 
            switchBooks(categorias)
        break;
        case 2: 
            switchBooks(categorias)
        break;
        case 3: 
            switchBooks(categorias)
        break;
        case 4: 
            switchBooks(categorias)
        break;  
    }


    const onClickClearProfile = ()=>{
        if(window.confirm("Вы действительно хотите очистить список?")){
            dispatch(ClearProfile())
        }
    }


    const onRemoveItem = (id) =>{
        if(window.confirm('Вы действительно хотите удалить?')){
            dispatch(removeProfileItem(id));
        }
    }
     
return(

    <div className="profile">
        <div className="container">
            <div className="wrapper">
                    <div className="profile_image"><img src={profile_image} alt="image"></img></div>
                    <div className="profile_intro"><img src={profile_back} alt="image_back"></img></div>
                    <div className="profile_nickName"><div className="nick">{user.userName || user.email}</div></div>
                <div className="profile_navBar">
                    {/* <a href="#" className="navBar_link">Списки</a>
                    <a href="#" className="navBar_link">Настройки</a> */}
                    <div onClick = {onClickClearProfile} className={totalCount === 0 ? 'navBar_link disabled': 'navBar_link'}>Очистить список</div>
                </div>
               <Categorias
               activeCategorias={categorias}
               onClickItem = {onSelectCategorias}
               items={categoriasName}
               addedBooks = {addedBooksProfile}
               
               />
                <div className="content">
                   {
                    totalCount ? 
                        items &&
                            isLoaded ? addedBooksProfile.map(obj=>(
                                <BookProfile key = {obj.id} {...obj} onRemove={onRemoveItem}/>
                            )) :  Array(15).fill(<LoadingProfile/>)
                       :
                       <div className='content_clear'>
                            <div className='title'>Ваш список пуст</div>
                            <div className='description'>Зайдите на страницу интересующей вас книги и нажмите на кнопку "Добавить в.."</div>
                            <div className='image'><img src={list} alt="list" /></div>
                            <div className='link'>
                                <Link to = "/"><div className='redirect'>Главная</div></Link>
                                <Link to = "/Catalog"><div className='redirect'>Каталог</div></Link>
                            </div>
                       </div>
                   }
                </div>
            </div>
            
        </div>
    </div>

        )
    
}

export default Profile;

