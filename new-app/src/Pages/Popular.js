
import React from 'react';
import {Component} from 'react';


import drop from "../assets/icons/drop.svg"
import iconTwo from "../assets/icons/Two.svg"
import iocnOne from "../assets/icons/One.svg"
import iconThree from "../assets/icons/Three.svg"

import testmin from "../assets/img/book.png"
import o1 from "../assets/img/01.png"
import one from "../assets/img/one.png"
class Popular extends Component{
    render(){
        return(

<div class="popular">
        <div class="container">
            <div class="popular_sort">
                <div class="title">Популярное за</div>
                <div class="btn">
                    <div class="text">Сегодня</div>
                    <img src={drop} alt="drop"></img>
                </div>
            </div>

        <div class="popular_catwalk">
            <div class="wrapper">
                <div class="position Two">
                    <div class="marker"><img src={iconTwo} alt=""></img></div>
                    <img class="img" src={o1} alt=""></img>
                    <div class="name">Повелитель/</div>
                    <div class="subName">Overlord</div>
                </div>
                <div class="position One">
                    <div class="marker"><img src={iocnOne} alt=""></img></div>
                    <img class="img" src={one} alt=""></img>
                    <div class="name">Повелитель/</div>
                    <div class="subName">Overlord</div>
                </div>
                <div class="position Three">
                    <div class="marker"><img src={iconThree} alt=""></img></div>
                    <img class="img" src={testmin} alt=""></img>
                    <div class="name">Повелитель/</div>
                    <div class="subName">Overlord</div>
                </div>
            </div>
        </div>
        <div class="popular_item">
            <div class="number">4</div>
            <img src={testmin} alt=""></img>
            <div class="descr">
                <div class="name">Повелитель</div>
                <div class="subName">Overlord</div>
            </div>
        </div>
        <div class="popular_item">
            <div class="number">4</div>
            <img src={testmin} alt=""></img>
            <div class="descr">
                <div class="name">Повелитель</div>
                <div class="subName">Overlord</div>
            </div>
        </div>
        <div class="popular_item">
            <div class="number">4</div>
            <img src={testmin} alt=""></img>
            <div class="descr">
                <div class="name">Повелитель</div>
                <div class="subName">Overlord</div>
            </div>
        </div>

        </div>
</div>
        
        )
    }
}

export default Popular;

