import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

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
  feedbacks: DS.attr('json'),
  offers_cloud: DS.attr('string'),
  govdc: DS.attr('string'),
  services: DS.attr('json'),

  eligible: computed('offers_cloud', 'govdc', function() {
    return this.get('offers_cloud') == 'true' || this.get('govdc') == 'true';
  }),
});
