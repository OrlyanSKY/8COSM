import JustValidate from 'just-validate';
const validate = new JustValidate('.form_popUp', {
  errorFieldCssClass: 'is-invalid',

  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    fontSize: '14px',
    fontStyle: 'italic',
    marginTop: '-16px',
    textDecoration: 'underlined',
  },
});

validate
  .addField('.form_popUp__input', [
    {
      rule: 'required',
      errorMessage: `Введіть будь ласка своє ім'я`,
    },
  ])
  .addField('.popUp_form__number', [
    {
      rule: 'customRegexp',
      value: /^(\s*)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      errorMessage: `Невірно введено номер`,
    },
  ]);

const mainPageValidation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    fontSize: '14px',
    fontStyle: 'italic',
    marginTop: '-17px',
    textDecoration: 'underlined',
  },
});

mainPageValidation
  .addField('#name_input', [
    {
      rule: 'required',
      errorMessage: `Введіть будь ласка своє ім'я`,
    },
  ])
  .addField('#tel', [
    {
      rule: 'customRegexp',
      value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
      errorMessage: `Невірно введено номер`,
    },
  ]);
