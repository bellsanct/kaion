const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    420: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
  grabCursor: true,
  effect: 'coverflow',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev', 
  },
  pagination: {
    el: '.swiper-pagination', 
    clickable: true,
    type: 'bullets'
  },
});

