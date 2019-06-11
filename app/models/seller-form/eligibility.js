import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  'form.offers_cloud': {
    validators: [
      validator('presence', true),
    ]
  },
  'form.govdc': {
    validators: [
      validator('presence', true),
    ]
  },
});

export default DS.Model.extend(Validations, {
  offers_cloud: DS.attr('string'),
  govdc: DS.attr('string'),
  services: DS.attr('json'),
});
