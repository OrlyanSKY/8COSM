import IMask from 'imask';
const nameInput = document.getElementById('name_input');
const phoneInput = document.getElementById('tel');

nameMask = IMask(nameInput, {
  mask: /^[a-zA-Zа-яА-ЯЇїІіЄєЫыЁё\s\']+$/,
});

const maskOptions = {
  mask: '+00(000)000-00-00',
  lazy: false,
  placeholderChar: 'x',
};

const mask = IMask(phoneInput, maskOptions);
