import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  offers_cloud: {
    validators: [
      validator('presence', true),
    ]
  },
  govdc: {
    validators: [
      validator('presence', true),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  offers_cloud: DS.attr('string'),
  govdc: DS.attr('string'),
  services: DS.attr('json'),
});
