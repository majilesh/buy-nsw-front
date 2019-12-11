import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'buyer.application_body': {
    validators: [
      validator('presence', true),
    ]
  },
  'buyer.cloud_purchase': {
    validators: [
      validator('presence', true),
    ]
  },
  'buyer.contactable': {
    validators: [
      validator('presence', true),
    ]
  },
  'buyer.contact_number': {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^(\+)?[0-9 ()-]{3,20}$/,
        message: "Please enter a valid phone number."
      })
    ]
  },
});

export default Component.extend(Validations, {
  actions: {
    back() {
      this.set('step', 'one');
    },
    next() {
      this.set('step', 'three');
    }
  }
});
