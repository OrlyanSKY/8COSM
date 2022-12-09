const items = document.querySelectorAll('.work__item');
const closePopUp = document.querySelector('.pop_up__btn');
const popUp = document.querySelector('.pop_up');
const header = document.querySelector('.header');

const handleClick = e => {
  closePopUp.dataset.worklist = e.currentTarget.dataset.worklist;

  const workList = document.querySelector(
    `.${e.currentTarget.dataset.worklist}`
  );

  header.classList.toggle('is-hidden');
  document.body.classList.toggle('scroll_lock');
  popUp.classList.toggle('is-hidden');
  workList.classList.toggle('is-hidden');
  workList.classList.toggle('visually-hidden');
};

items.forEach(img => {
  img.addEventListener('click', handleClick);
});

closePopUp.addEventListener('click', handleClick);
