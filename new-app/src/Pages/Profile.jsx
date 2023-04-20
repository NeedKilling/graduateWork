
import React from 'react';
import {Component} from 'react';
import Categorias from '../component/Categorias';

import profile_image from "../assets/icons/profile_big.svg"
import profile_back from "../assets/img/profile_back.jpg"
import testmin from "../assets/img/book.png"

function Profile(){
    
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
            //    onClickItem = {(name)=>console.log(name)}
               items={[
                "Читаю",
                "В планах",
                "Прочитано",
                "Любимое",
                "Брошено"
               ]}
               
               />
                <div class="content">
                    <div class="content_item">
                       <div class="img"><img src={testmin} alt="book"></img></div>
                        <div class="text">
                            <a href="#" class="name">Повелитель</a>
                            <div class="subName">Overlord</div>
                            <button class="continue">Продолжить</button>
                        </div>
                    </div>
                    <div class="content_item">
                       <div class="img"><img src={testmin} alt="book"></img></div>
                        <div class="text">
                            <div class="name">Повелитель</div>
                            <div class="subName">Overlord</div>
                            <button class="continue">Продолжить</button>
                        </div>
                    </div>
                    <div class="content_item">
                       <div class="img"><img src={testmin} alt="book"></img></div>
                        <div class="text">
                            <div class="name">Повелитель</div>
                            <div class="subName">Overlord</div>
                            <button class="continue">Продолжить</button>
                        </div>
                    </div>
                    <div class="content_item">
                       <div class="img"><img src={testmin} alt="book"></img></div>
                        <div class="text">
                            <div class="name">Повелитель</div>
                            <div class="subName">Overlord</div>
                            <button class="continue">Продолжить</button>
                        </div>
                    </div>
                    <div class="content_item">
                       <div class="img"><img src={testmin} alt="book"></img></div>
                        <div class="text">
                            <div class="name">Повелитель</div>
                            <div class="subName">Overlord</div>
                            <button class="continue">Продолжить</button>
                        </div>
                    </div>


                </div>
            </div>
            
        </div>
    </div>

        )
    
}

export default Profile;

