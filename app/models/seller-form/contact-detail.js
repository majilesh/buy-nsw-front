import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  contact_name: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  contact_email: {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Please enter a valid email address."
      })
    ]
  },
  contact_phone: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^(\+)?[0-9 ()\-]{3,20}$/,
        message: "Please enter a valid phone number."
      })
    ],
  },
  representative_name: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  representative_email: {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: "Please enter a valid email address."
      })
    ]
  },
  representative_phone: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^(\+)?[0-9 ()\-]{3,20}$/,
        message: "Please enter a valid phone number."
      })
    ],
  },
  representative_position: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  contact_name: DS.attr('string'),
  contact_email: DS.attr('string'),
  contact_phone: DS.attr('string'),
  representative_name: DS.attr('string'),
  representative_email: DS.attr('string'),
  representative_phone: DS.attr('string'),
  representative_position: DS.attr('string'),
  addresses: DS.attr('json'),
});
