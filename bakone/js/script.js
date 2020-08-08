/* Actice menu */

let menuLink = document.querySelectorAll('.nav-menu__link');

menuLink.forEach(a => {
   a.addEventListener('click', function() {
      menuLink.forEach(menu => menu.classList.remove('active'));
      this.classList.add('active');
   });
});

/* Sticky Menu */
window.addEventListener('scroll', function() {
   let headerTop = document.querySelector('.header__top');
   let navSticky = document.querySelector('.nav-menu');

   headerTop.classList.toggle('sticky', window.scrollY > 0);
   navSticky.classList.toggle('nav-sticky', window.scrollY > 0);
});

/* Burger Menu */

let burgerMenu = document.querySelector('.burger-menu');
let navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
   burgerMenu.classList.toggle('burger-active');
   navMenu.classList.toggle('nav-active');
});

/* Hide Menu On Scroll */ 

// let prevSrcollpos = window.pageYOffset;
// let headerTop = document.querySelector('.header__top');
// // let navMenuHide = document.querySelector('.nav-menu');

// window.onscroll = function() {
//    let currentScrollpos = window.pageYOffset;

//    headerTop.classList.toggle('sticky', window.scrollY > 0);

//    if(prevSrcollpos > currentScrollpos) {
//       document.querySelector('.header__top').style.top = "0";
//    } else {
//       document.querySelector('.header__top').style.top = "-100px";
//    }
//    prevSrcollpos = currentScrollpos;
// }