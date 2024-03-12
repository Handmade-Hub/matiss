document.addEventListener('DOMContentLoaded', function () {

 // header drop-down
 if (document.querySelectorAll('.header__drop-down').length) {
  const dropDown = document.querySelectorAll('.header__drop-down');
 
  dropDown.forEach(e => {
   const menu = e.querySelector('.header__drop-down_list');
   e.addEventListener('mouseover', evt => {
    e.classList.add('active');
    menu.classList.add('active');
    menu.style.maxHeight = menu.scrollHeight + 'px';
   })
   e.addEventListener('mouseout', evt => {
    e.classList.remove('active')
    menu.classList.remove('active')
    menu.style.maxHeight = null;
   })
  });
 }

 // header localization
 if (document.querySelectorAll('.header__localization').length) {
  const wrapper = document.querySelectorAll('.header__localization');
  const buttons = wrapper.querySelectorAll('.header__localization_button');
  

 }

 // banner swiper
 if (document.querySelectorAll('.banner__swiper').length) {
  const swiper = new Swiper('.banner__swiper', {
   pagination: {
    el: '.banner__swiper-pagination',
   },
  });
 }

 // new-collection swiper
 if (document.querySelectorAll('.new-collection__swiper').length) {
  const swiper = new Swiper('.new-collection__swiper', {
   spaceBetween: 32,
   slidesPerView: 1,
   breakpoints: {
    576: {
     slidesPerView: 2,
    },
    992: {
     slidesPerView: 3,
    }
   },
   navigation: {
    nextEl: '.new-collection__swiper-button-next',
    prevEl: '.new-collection__swiper-button-prev',
   },
   pagination: {
    el: '.new-collection__swiper-pagination',
   },
  });
 }

 // goal swiper
 if (document.querySelectorAll('.goal__swiper').length) {
  const swiper = new Swiper('.goal__swiper', {
   navigation: {
    nextEl: '.goal__swiper-button-next',
    prevEl: '.goal__swiper-button-prev',
   },
   pagination: {
    el: '.goal__swiper-pagination',
   },
  });
 }

 // clients swiper
 if (document.querySelectorAll('.clients__swiper').length) {
  const swiper = new Swiper('.clients__swiper', {
   loop: true,
   spaceBetween: 48,
   slidesPerView: 2.6,
   speed: 3000,
   autoplay: {
    delay: 0,
   },
   breakpoints: {
    575: {
     slidesPerView: 4,
    },
    768: {
     slidesPerView: 5,
     spaceBetween: 30,
    },
    992: {
     slidesPerView: 6,
     spaceBetween: 60,
    },
    1200: {
     slidesPerView: 6.8,
    }
   }
  });
 }

 // description accordion
 const screenWidth = window.screen.width;
 if (document.querySelectorAll('.description').length) {
  const wrapper = document.querySelector('.description__wrapper');
  const button = wrapper.querySelector('.description__button');

  button.addEventListener('click', e => {
   button.classList.toggle('active');
   wrapper.classList.toggle('active');
   if (wrapper.classList.contains('active')) wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
   else if (screenWidth >= 768) wrapper.style.maxHeight = '360px';
   else wrapper.style.maxHeight = '388px'
  });

 }

});