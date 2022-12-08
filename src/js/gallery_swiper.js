import Swiper, { Navigation, Pagination } from 'swiper';

const gallery = new Swiper('.slider_gallery', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideActiveClass: 'work_slide__active',
  slideClass: 'gallery-slide',
  initialSlide: 2,
  breakpoints: {
    // when window width is >= 1000px
    1000: {
      centeredSlides: true,
      slidesPerView: 'auto',
      loopedSlides: 5,
      spaceBetween: 180,
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
