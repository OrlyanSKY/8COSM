import Swiper, { Navigation, Pagination } from 'swiper';

const gallery = new Swiper('.slider_gallery', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideActiveClass: 'active',
  breakpoints: {
    // when window width is >= 1000px
    1000: {
      centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});

// const gallerySwiper = new Swiper('.gallery_swiper', {
//   modules: [Navigation, Pagination],
//   slidesPerView: 1,
//   spaceBetween: 50,
//   centeredSlides: true,
//   loop: true,

//   breakpoints: {
//     // when window width is >= 1000px
//     1000: {
//       slidesPerView: 2.5,
//       spaceBetween: 20,
//     },
//   },

//   pagination: {
//     el: '.gallery_swiper__pagination',
//     bulletClass: 'bullet',
//     bulletActiveClass: 'active_bullet',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },
// });
