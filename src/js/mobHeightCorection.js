const mobMenuHeight = () => {
  const height = window.innerHeight + 'px';
  const mobMenu = document.querySelector('.mob_menu');
  const swiperModal = document.querySelector('.pop_up__body');
  const menuModal = document.querySelector('.backdrop');

  mobMenu.style.height = height;
  swiperModal.style.height = height;
  menuModal.style.height = height;
};
window.addEventListener('resize', mobMenuHeight);
mobMenuHeight();
