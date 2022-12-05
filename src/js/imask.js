import IMask from 'imask';

const phoneInput = document.getElementById('tel');

const maskOptions = {
  mask: '+{380}(00)000-00-00',
  lazy: false,
};
const mask = IMask(phoneInput, maskOptions);
