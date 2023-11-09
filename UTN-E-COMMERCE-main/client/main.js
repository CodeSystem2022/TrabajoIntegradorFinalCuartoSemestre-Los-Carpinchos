let contactSection = document.querySelector(".contact");
const shopContent = document.getElementById("shopContent");


// MENU OPEN CLOSE
let menu = document.querySelector('.menu-icon');
//let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

// SCROLL CIERRE MENU HAMBURGUESA
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};

// HEADER BACKGROUND CAMBIO
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



// HOME SWIPER
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// CONTROL SWIPER
var swiper = new Swiper(".control-images", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});







