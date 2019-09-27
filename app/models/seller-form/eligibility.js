import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  offers_ict: {
    validators: [
      validator('presence', true),
    ]
  },
  govdc: {
    validators: [
      validator('presence', true),
    ]
  },
  eligible: {
    validators: [
      validator('inline', {
        message: 'To become an eligible supplier on buy.nsw you have to offer one of the above',
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
  offers_ict: DS.attr('string'),
  govdc: DS.attr('string'),

  eligible: computed('offers_ict', 'govdc', function() {
    return this.get('offers_ict') == 'true' || this.get('govdc') == 'true';
  }),
});
