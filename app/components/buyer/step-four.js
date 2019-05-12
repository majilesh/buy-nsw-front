import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'buyer.manager_name': {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  'buyer.manager_email': {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
      })
    ]
  },
});

export default Component.extend(Validations, {
  actions: {
    back() {
      this.set('step', 'three');
    },
    next() {
      this.set('step', 'five');
    }
  }
});
