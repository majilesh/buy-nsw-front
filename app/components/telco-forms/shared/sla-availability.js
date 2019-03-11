import Component from '@ember/component';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'product.sla_availability_requirement': validator('inclusion', { in: [ 'yes' ] })
});

export default Component.extend(Validations, { 
});
