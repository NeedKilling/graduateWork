
import React from 'react';
import Categorias from '../component/Categorias';
import { useSelector,useDispatch } from 'react-redux';
import profile_image from "../assets/icons/profile_big.svg"
import profile_back from "../assets/img/profile_back.jpg"
import BookProfile from '../component/BookBlock/BookProfile';
import {setCategorias} from "../redux/actions/filtres"
import { fetchBooksProfile } from '../redux/actions/books';
import {  LoadingProfile } from '../component';

function Profile(){
    const dispatch = useDispatch();

    const addedBooks = useSelector((state) => state.Books.addItems) //                        добавлении книг!!!!!!!!!!!!!!!!

    const items = useSelector((state) => state.Books.items); //получение из редакса книг
    const isLoaded = useSelector((state) => state.Books.isLoaded)
    const {categorias} = useSelector(({filtres}) => filtres);//получение из редакса категорию
    

    const onSelectCategorias = React.useCallback((index) => {
        dispatch(setCategorias(index));
    },[]);

        const categoriasName = ["Читаю","В планах","Прочитано","Любимое","Брошено"];
    
    // React.useEffect(()=>{                /// получение книг при изменеии категории  
    //     dispatch(fetchBooksProfile(categorias))
    // },[categorias]);


        return(

    <div class="profile">
        <div class="container">
            <div class="wrapper">
                    <div class="profile_image"><img src={profile_image} alt="image"></img></div>
                    <div class="profile_intro"><img src={profile_back} alt="image_back"></img></div>
                    <div class="profile_nickName"><div class="nick">USER</div></div>
                <div class="profile_navBar">
                    <a href="#" class="navBar_link">Списки</a>
                    <a href="#" class="navBar_link">Настройки</a>
                </div>
               <Categorias
               activeCategorias={categorias}
               onClickItem = {onSelectCategorias}
               items={categoriasName}
               
               />
                <div class="content">
                   {/* {
                    isLoaded ? items.map(obj=>(
                        <BookProfile key = {obj.id} {...obj}/>
                    )) :  Array(15).fill(<LoadingProfile/>)
                   } */}
                   
                </div>
            </div>
            
        </div>
    </div>

        )
    
}

export default Profile;

