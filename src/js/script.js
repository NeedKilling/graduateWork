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


// function clickDropProfile(){
//     document.getElementById("drop").classList.toggle("dropdown-content_show")
// }
// // Закрыть модальное окно при Escape
// window.addEventListener('keydown', (e) => {
//     if (e.key == 'Escape'){
//         document.querySelector('#drop').classList.remove("dropdown-content_show")
//     }
// })
// Закрыть модальное окно при клике вне его

    const button = document.querySelector('.profile-btn') // находим кнопку для открытия/закрытия окна навигации
    const nav = document.querySelector('.dropdown-content') // находим окно навигации
  
    button.addEventListener('click', () => { // при клике на кнопку
      nav.classList.toggle('dropdown-content_show') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
    })
  
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.dropdown-content') && !target.closest('.profile-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        nav.classList.remove('dropdown-content_show') // то закрываем окно навигации, удаляя активный класс
      }
    })







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clickDropBookmark(){
    document.getElementById("dropBookmark").classList.toggle("dropdown-ul__show")
}
// Закрыть модальное окно при Escape
window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape'){
        document.querySelector('#dropBookmark').classList.remove("dropdown-ul__show")
    }
})

// /////// Замена текста
// $('.dropdown-ul__item').click(function () {
//     if($('.mark').attr('data-show') === "true") {
//         $('.mark').text("Закладка");
//         $('.mark').attr('data-show', "false"); 
//     }
//     else {
//         //var elements = document.getElementsByClassName("dropdown-ul__item");
//         var item = document.getElementsByClassName('.dropdown-ul__item');
//         function text(){
//             if(item === 'Читать')
//             return console.log('fafsffa');
//         }
//         text()
//             $('.mark').text("ds");
//             $('.mark').attr('data-show', "true");
        
       
//     }
// });