import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper.scss';

var swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 0,
  slideClass: 'reviews__slide',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
