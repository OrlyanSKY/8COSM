import Swiper, { Navigation, Pagination } from 'swiper';

const lipsGallery = new Swiper('.slider_gallery_lips', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideActiveClass: 'work_slide__active',
  slideClass: 'lips-slide',
  wrapperClass: 'lips-wrapper',
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
  pagination: {
    el: '.lips-pagination',
    bulletClass: 'bullet',
    bulletActiveClass: 'active_bullet',
    clickable: true,
  },
  navigation: {
    nextEl: '.lips-next',
    prevEl: '.lips-prev',
  },
});

const wrinklesGallery = new Swiper('.slider_gallery_wrinkles', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideActiveClass: 'work_slide__active',
  slideClass: 'wrinkles-slide',
  wrapperClass: 'wrinkles-wrapper',
  initialSlide: 3,
  breakpoints: {
    // when window width is >= 1000px
    1000: {
      centeredSlides: true,
      slidesPerView: 'auto',
      loopedSlides: 5,
      spaceBetween: 180,
    },
  },
  pagination: {
    el: '.wrinkles-pagination',
    bulletClass: 'bullet',
    bulletActiveClass: 'active_bullet',
    clickable: true,
  },
  navigation: {
    nextEl: '.wrinkles-next',
    prevEl: '.wrinkles-prev',
  },
});

const faceGallery = new Swiper('.slider_gallery_face', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  slideActiveClass: 'work_slide__active',
  slideClass: 'face-slide',
  wrapperClass: 'face-wrapper',
  initialSlide: 3,
  breakpoints: {
    // when window width is >= 1000px
    1000: {
      centeredSlides: true,
      slidesPerView: 'auto',
      loopedSlides: 5,
      spaceBetween: 180,
    },
  },
  pagination: {
    el: '.face-pagination',
    bulletClass: 'bullet',
    bulletActiveClass: 'active_bullet',
    clickable: true,
  },
  navigation: {
    nextEl: '.face-next',
    prevEl: '.face-prev',
  },
});
