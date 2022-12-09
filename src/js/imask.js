import IMask from 'imask';

const phoneInput = document.getElementById('tel');

const maskOptions = {
  mask: '{38}(000)000-00-00',
  lazy: false,
};
const mask = IMask(phoneInput, maskOptions);
