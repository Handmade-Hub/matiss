document.addEventListener('DOMContentLoaded', function() {

 // banner swiper
 if (document.querySelectorAll('.banner__swiper').length) {
  const swiper = new Swiper('.banner__swiper', {
   pagination: {
    el: '.swiper-pagination',
  },
  });
 }


});