const swiper = new Swiper('.swiper', {
  wrapperClass: 'swiper-wrapper',
  SlideClass: 'swiper-slide',
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    768: {
      enabled: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true
  },
});