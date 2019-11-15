import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  contact_first_name: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  contact_last_name: {
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
  representative_first_name: {
    validators: [
      validator('presence', true),
      validator('format', {
        regex: /^[a-zA-Z .]*$/,
        message: "Please only use alphabets, space and period."
      })
    ]
  },
  representative_last_name: {
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
  corporate_structure: {
    validators: [
      validator('presence', true),
      validator('inline', {
        message: 'Please select your corporate structure',
        dependentKeys: ['corporate_structure', 'headOfficeAustralia'],
        validate(value, options, model, attributes) {
          return !model.headOfficeAustralia ||
            value == 'subsidiary' || value == 'standalone' || options.message;
        }
      }),
    ],
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  apiErrors: DS.attr('json'),

  contact_first_name: DS.attr('string'),
  contact_last_name: DS.attr('string'),
  contact_email: DS.attr('string'),
  contact_phone: DS.attr('string'),

  representative_first_name: DS.attr('string'),
  representative_last_name: DS.attr('string'),
  representative_email: DS.attr('string'),
  representative_phone: DS.attr('string'),
  representative_position: DS.attr('string'),

  addresses: DS.attr('json'),
  regional: DS.attr('boolean'),
  headOfficeAustralia: computed(
    'addresses',
    'addresses.[]',
    'addresses.@each.country',
    function() {
      let country = this.get('addresses')[0].country;
      return country == 'AU' || country == 'NZ';
  }),
  headOfficeRegional: computed(
    'addresses',
    'addresses.[]',
    'addresses.@each.postcode',
    function() {
      let postcode = parseInt(this.get('addresses')[0].postcode);
      return this.get('addresses')[0].state == 'nsw' && Number.isInteger(postcode) && (
        2250 <= postcode && postcode <= 2251 ||
        2256 <= postcode && postcode <= 2263 ||
        2311 <= postcode && postcode <= 2312 ||
        2328 <= postcode && postcode <= 2411 ||
        2415 == postcode ||
        2420 <= postcode && postcode <= 2490 ||
        2536 <= postcode && postcode <= 2551 ||
        2575 <= postcode && postcode <= 2594 ||
        2618 <= postcode && postcode <= 2739 ||
        2787 <= postcode && postcode <= 2898
      );
  }),

  corporate_structure: DS.attr('string'),
  same_as_above: DS.attr('boolean'),
  signal: DS.attr('number', { defaultValue: 0 }),
});
