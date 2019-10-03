import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  services: {
    validators: [
      validator('presence', {
        presence: true,
        message: 'Please select at least one of the above'
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  apiErrors: DS.attr('json'),
  services: DS.attr('json'),
  signal: DS.attr('number', { defaultValue: 0 }),
});
