import IMask from 'imask';
const nameInput = document.getElementById('name_input');
const phoneInput = document.getElementById('tel');

const nameMask = IMask(nameInput, {
  mask: /^[a-zA-Zа-яА-ЯЇїІіЄєЫыЁё\s\']+$/,
});

const maskOptions = {
  mask: '+00(000)000-00-00',
  lazy: false,
  placeholderChar: 'X',
};

const mask = IMask(phoneInput, maskOptions);
