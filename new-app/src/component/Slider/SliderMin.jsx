import React, { Component } from "react";
import Slider from "react-slick";

import testmin from "../../assets/img/book.png"

export default class SliderBig extends Component {
  render() {
    const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
        slidesToShow: 6,
        easing: 'easeInOutQuad',
        autoplay: false,
        speed: 1000,
        infinity: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: true,
        swipeToSlide: false,
        touchMove: false,
        touchThreshold: false,
        waitForAnimate: true,
        wariableWidth: true,
        focusOnSelect: false
    };
    return (
      <div>
       
<div className="contineSlider">
    <Slider {...settings}>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>    
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
        <a href="#" className="book">
            <div className="book_img"><img src={testmin} alt="book"></img></div>
            <div className="book_name">Повелитель</div>
            <div className="book_subName">Overlord</div>
        </a>
    </Slider>
</div>
        
    </div>
        
      
    );
  }
}
