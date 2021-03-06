import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.data_per_month': validator('presence', {
    'presence': true,
    'message': 'To add this product one of the above options have to be selected.'
  })
});

export default Component.extend(Validations, {
});
