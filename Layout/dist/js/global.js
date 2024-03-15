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

 // burger menu
 if (document.querySelectorAll('.header-mobile__wrapper').length) {
  const button = document.querySelector('.header__burger');
  const menu = document.querySelector('.header-mobile__wrapper');
  const close = document.querySelector('.header-mobile__close');
  const body = document.body;

  button.addEventListener('click', e => {
   menu.classList.add('menu-open');
   body.classList.add('menu-open');
  })
  close.addEventListener('click', e => {
   menu.classList.remove('menu-open');
   body.classList.remove('menu-open');
  })
 }

 // mobile drop-down
 if (document.querySelectorAll('.header-mobile__drop-down_list').length) {
  const dropDown = document.querySelectorAll('.header-mobile__drop-down');

  dropDown.forEach(item => {
   const button = item.querySelector('.header-mobile__menu_link.with-arrow');
   const list = item.querySelector('.header-mobile__drop-down_list')
   item.addEventListener('click', evt => {
    if (evt.target == button) {
     item.classList.toggle('active');
     item.classList.contains('active') ? list.style.maxHeight = list.scrollHeight + 'px' : list.style.maxHeight = null;
    }
   })
  });

 }

 // header localization
 if (document.querySelectorAll('.header__localization').length) {
  const buttons = document.querySelectorAll('.header__localization_button');
  buttons.forEach(button => {
   button.addEventListener('click', e => {
    if (!button.classList.contains('active')) {
     buttons.forEach(item => {
      item.classList.remove('active')
     });
     button.classList.add('active');
    }
   })
  })

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

 // achievements numbers counts
 if (document.querySelectorAll('.achievements__list').length) {
  const wrapper = document.querySelector('.achievements');
  const items = document.querySelectorAll('.achievements__item_title span');

  window.addEventListener('scroll', function () {
   const offset = wrapper.offsetTop;
   let scrollDistance = window.scrollY;
   if (offset - scrollDistance <= 400) {
   }
  });
  items.forEach(item => {
   const number = item.textContent;
   let i = 0;
   if (number <= 100) {
    let counts = setInterval(function () {
     i++;
     i > number ? clearInterval(counts) : item.innerText = i;
    }, 50);
   } else if (number <= 1000) {
    let counts = setInterval(function () {
     i++;
     i > number ? clearInterval(counts) : item.innerText = i;
    }, 1);
   } else {
    let counts = setInterval(function () {
     i += 4;
     i > number ? clearInterval(counts) : item.innerText = i;
    }, 1);
   }
  })
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