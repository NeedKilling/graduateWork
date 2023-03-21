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


function clickFunction(){
    document.getElementById("drop").classList.toggle("dropdown-content_show")
}
// Закрыть модальное окно при Escape
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape'){
        document.querySelector('#drop').classList.remove("dropdown-content_show")
    }
})
// Закрыть модальное окно при клике вне его
$(document).click(function (e) {
    if ($(e.target).is('#drop')) {
        $('#drop').classList.remove('dropdown-content_show');
    }
});


// window.onclick = function(event){
//     if(!event.target.matches(".profile-btn")){
//         var dropdowns = document.getElementsByClassName("dropdown-content")
//         var i;
//         for(i = 0;i < dropdowns.length;i++){
//             var openDrop = dropdowns[i];
//             if(openDrop.classList.contains("dropdown-content_show")){
//                 openDrop.classList.remove("dropdown-content_show");
//             }
//         }
//     }
// }

