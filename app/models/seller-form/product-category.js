import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  services_present: {
    validators: [
      validator('inline', {
        message: 'Please select at least one of the above',
        validate(value, options, model, attributes) {
          return value == true || options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  apiErrors: DS.attr('json'),
  services: DS.attr('json'),
  services_present: computed(
    'services',
    'signal',
    function() {
      return this.get('services') != null && this.get('services').length > 0;
  }),
  signal: DS.attr('number', { defaultValue: 0 }),
});
