import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.mobile_device_management_type': validator('presence', {
    presence: true,
    message: "Please select one of the management types."
  })
});

export default Component.extend(Validations, { 
});
