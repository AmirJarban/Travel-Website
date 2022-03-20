let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn')
let formCloseBtn = document.querySelector('#form-close');
let loginForm = document.querySelector('.login-form-container');
let menuBtn = document.querySelector('#menu-btn');
let menuList = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


///hide searchBar after scrolling
window.onscroll = () => {                       
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuList.classList.remove('active');
}

searchBtn.addEventListener('click' , () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    menuList.classList.remove('active');
})

////showing and hiding login form 
formBtn.addEventListener('click',() => {
    loginForm.classList.add('active');
})

formCloseBtn.addEventListener('click',() =>{
    loginForm.classList.remove('active');
})

///showing and hiding menu bar
menuBtn.addEventListener('click' , () => {
    menuList.classList.toggle('active');
    searchBar.classList.remove('active');
})


///chosing video
videoBtn.forEach(btn => {
    btn.addEventListener('click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})


// swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween : 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction : false,
    },
    breakpoints: {
        640:{
            slidesPerView : 1
        },
        768:{
            slidesPerView : 2
        },
        1024:{
            slidesPerView : 3
        }
    }
});