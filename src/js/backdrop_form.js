import IMask from 'imask';

const phoneInput = document.getElementById('forn__tel');

const maskOptions = {
  mask: '{38} (000)000-00-00',
  lazy: false,
};
const mask = IMask(phoneInput, maskOptions);

const formPopUpBacdrop = document.querySelector('.backdrop');
const formPopUpOpenClose = document.querySelectorAll('.js-formPopUp');
const header = document.querySelector('header');
const mobMenuBtnModalFormOpen = document.querySelector('.mob_menu_btn');
const mobMenuEl = document.querySelector('.mob_menu');

mobMenuBtnModalFormOpen.addEventListener('click', () => {
  formPopUpBacdrop.classList.toggle('is-hidden');
  mobMenuEl.classList.toggle('is-hidden');
  header.classList.toggle('is-hidden');
});

const handleClick = () => {
  formPopUpBacdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('scroll_lock');
  header.classList.toggle('is-hidden');
};

formPopUpOpenClose.forEach(btn => btn.addEventListener('click', handleClick));

const formPopUp = document.querySelector('.form_popUp');

const handleSubmit = e => {
  e.preventDefault();
  const { phone, name } = e.currentTarget;

  const message = `<b><i>Ім'я:</i></b> ${name.value}%0A<b><i>Телефон:<i></b> <i>${phone.value}</i>`;
  console.log(
    `https://api.telegram.org/bot5840078401:AAE4S72HncySMPCNH2I-fUunf3-7RSts6d8/sendMessage?chat_id=-1001508491750&parse_mode=html&text=${message}`
  );
  // fetch(
  //   `https://api.telegram.org/bot5840078401:AAE4S72HncySMPCNH2I-fUunf3-7RSts6d8/sendMessage?chat_id=-1001508491750&parse_mode=html&text=${message}`,
  //   {
  //     method: 'POST',
  //   }
  // );
};

formPopUp.addEventListener('submit', handleSubmit);
