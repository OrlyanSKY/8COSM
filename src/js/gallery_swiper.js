import Swiper, { Navigation, Pagination } from 'swiper';

// const gallery = document.querySelector('.gallery_swiper');

const gallerySwiper = new Swiper('.gallery_swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  // },

  // pagination: {
  //   el: 'gallery_swiper__pagination',
  //   clickable: false,
  // },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
