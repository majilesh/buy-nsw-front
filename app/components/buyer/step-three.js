import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'buyer.employment_status': {
    validators: [
      validator('presence', true),
    ]
  },
});

export default Component.extend(Validations, {
  actions: {
    back() {
      this.set('step', 'two');
    },
    next() {
      if(this.get('buyer.employment_status') == 'contractor') {
        this.set('step', 'four');
      } else {
        this.set('step', 'five');
      }
    }
  }
});
