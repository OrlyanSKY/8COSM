import JustValidate from 'just-validate';
const validate = new JustValidate('.form_popUp', {
  errorFieldCssClass: 'is-invalid',

  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    fontStyle: 'italic',
    marginTop: '-16px',
    textDecoration: 'underlined',
  },
});

validate
  .addField('.form_popUp__input', [
    {
      rule: 'required',
      errorMessage: `Це обов'язкове поле для вводу`,
    },
  ])
  .addField('.popUp_form__number', [
    {
      rule: 'minLength',
      value: 12,
      errorMessage: `це обов'язкове поле для вводу і має складатися з 12 цифр`,
    },
  ]);
const mainPageValidation = new JustValidate('#form', {
  errorFieldCssClass: 'invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    fontStyle: 'italic',
    marginTop: '-17px',
    textDecoration: 'underlined',
  },
});

mainPageValidation.addField('#name_input', [
  {
    rule: 'required',
    errorMessage: `Це обов'язкове поле для вводу`,
  },
]);
