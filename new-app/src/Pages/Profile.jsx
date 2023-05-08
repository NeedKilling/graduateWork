
import React from 'react';
import {Component} from 'react';
import Categorias from '../component/Categorias';
import { useSelector,useDispatch } from 'react-redux';
import profile_image from "../assets/icons/profile_big.svg"
import profile_back from "../assets/img/profile_back.jpg"
import BookProfile from '../component/BookBlock/BookProfile';
import {setCategorias} from "../redux/actions/filtres"
function Profile(){
    const dispatch = useDispatch();

    const items = useSelector((state) => state.Books.items);

    const onSelectCategorias = index => {
        dispatch(setCategorias(index));
    };

    const categoriasName = ["Читаю","В планах","Прочитано","Любимое","Брошено"];

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
               onClickItem = {onSelectCategorias}
               items={categoriasName}
               
               />
                <div class="content">
                   {
                    items.map(obj=>(
                        <BookProfile key = {obj.id} {...obj}/>
                    ))
                   }
                </div>
            </div>
            
        </div>
    </div>

        )
    
}

export default Profile;

