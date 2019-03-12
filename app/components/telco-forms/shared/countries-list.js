import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.countries': validator('format', {
    regex: /^[a-zA-Z\n\s]+$/,
    message: 'Please only use alphabetical and whitespace characters.'
  })
});

export default Component.extend(Validations, {
});
