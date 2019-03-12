import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.sla_availability_requirement': validator('inclusion', {
    in: [ 'yes' ],
    message: "You cannot add this product if you do not meet the minimum requirement."
  })
});

export default Component.extend(Validations, { 
});
