const menuOpenBtn = document.querySelector('.burger_open');
const menuCloseBtn = document.querySelector('.close_menu_btn');
const mobMenuEl = document.querySelector('.mob_menu');
const mobNavListEl = document.querySelector('.mob_menu__nav');

menuOpenBtn.addEventListener('click', openCloseMenu);
menuCloseBtn.addEventListener('click', openCloseMenu);
mobNavListEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'A') return;
  openCloseMenu();
});

function openCloseMenu() {
  mobMenuEl.classList.toggle('is-hidden');
  document.body.classList.toggle('scroll_lock');
}

const mobMenuHeight = () => {
  const el = document.querySelector('.mob_menu');
  el.style.height = window.innerHeight + 'px';
};
window.addEventListener('resize', mobMenuHeight);
mobMenuHeight();
