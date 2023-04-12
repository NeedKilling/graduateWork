import React, { Component } from "react";
import Slider from "react-slick";

import testslider01 from "../../assets/img/main.png"
import testslider from "../../assets/img/slider_book.png"

export default class SliderBig extends Component {
  render() {
    const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
        arrows: false,
        slidesToShow: 10,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:2000,
        easing: 'easeInOutQuad',
        infinity: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        draggable: false,
        swipeToSlide: false,
        touchMove: false,
        touchThreshold: false,
        waitForAnimate: true,
        wariableWidth: true,
        focusOnSelect: false
    };
    return (
      <div>
       
        <div className="slider">
        <Slider {...settings}>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider} alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider}  alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
            <a href="#" className="slider_book">
                <div className="slider_book_img"><img src={testslider01} alt="book"></img></div>
                <div className="slider_book_name">Повелитель</div>
                <div className="slider_book_subName">Overlord</div>
            </a>
        </Slider>
    </div>
        
      </div>
    );
  }
}