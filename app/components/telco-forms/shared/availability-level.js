import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  field: validator('presence', true)
});

export default Component.extend(Validations, {
});
