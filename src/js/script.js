$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 10,
        autoplay: true,
        autoplaySpeed:2000,
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
    });
});
$(document).ready(function(){
    $('.contineSlider').slick({
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
    })
})

let header = document.querySelector('.js-header'),
    headerHight = document.querySelector('.js-header').clientHeight;
    introHight = document.querySelector('.intro').clientHeight;
    
document.onscroll = function(){
    let scroll = window.scrollY;
    if(scroll > headerHight+introHight){
        header.classList.add('fixed')
        document.body.style.paddingTop = headerHight +'px';
    }else{
        header.classList.remove('fixed')
        document.body.removeAttribute('style')
    }
    
}