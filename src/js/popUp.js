const items = document.querySelectorAll('.work__item');
const closePopUp = document.querySelector('.pop_up__btn');
const popUp = document.querySelector('.pop_up');
const header = document.querySelector('.header');

const handleClick = () => {
  popUp.classList.toggle('is-hidden');
  document.body.classList.toggle('scroll_lock');
  header.classList.toggle('is-hidden');
};

items.forEach(img => {
  img.addEventListener('click', handleClick);
});

closePopUp.addEventListener('click', handleClick);
