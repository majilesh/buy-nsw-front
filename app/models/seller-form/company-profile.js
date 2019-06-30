import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  summary: {
    validators: [
      validator('presence', true),
    ]
  },
  website_url: {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'url'
      })
    ]
  },
  linkedin_url: {
    validators: [
      validator('format', {
        allowBlank: true,
        type: 'url'
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  summary: DS.attr('string'),
  website_url: DS.attr('string'),
  linkedin_url: DS.attr('string'),
  awards: DS.attr('json'),
  accreditations: DS.attr('json'),
  engagements: DS.attr('json'),
});
