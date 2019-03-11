import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.availability': validator('presence', true)
});

export default Component.extend(Validations, {
});
