import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'buyer.name': {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  'buyer.organisation': {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z0-9 ,.]*$/,
        message: "Please only use alphanumerics, space, comma and period."
      })
    ]
  },
});

export default Component.extend(Validations, {
  actions: {
    next() {
      this.set('step', 'two');
    }
  }
});
