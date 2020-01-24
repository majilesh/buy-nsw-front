import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';
import moment from 'moment';

function dateValid(date) {
  return date != "" && date != undefined &&
         date.match(/^\d{4}-\d{1,2}-\d{1,2}$/) != null &&
         moment.parseZone(date, 'YYYY-MM-DD').isValid();
}

function dateInRange(date) {
    let m = moment.parseZone(date, 'YYYY-MM-DD');
    return m.isBetween(moment().format('YYYY-MM-DD'), '2100-01-01');
}

const Validations = buildValidations({
  professional_indemnity_certificate_expiry_valid: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
          return value == true || options.message;
        }
      }),
    ]
  },
  product_liability_certificate_expiry_valid: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
          return value == true || options.message;
        }
      }),
    ]
  },
  workers_compensation_certificate_expiry_valid: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
          return value == true || options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  apiErrors: DS.attr('json'),

  professional_indemnity_certificate_ids: DS.attr('json'),
  professional_indemnity_certificate_expiry: DS.attr('string'),
  professional_indemnity_certificate_expiry_valid: computed(
    'professional_indemnity_certificate_ids',
    'professional_indemnity_certificate_ids.[]',
    'professional_indemnity_certificate_expiry',
    function() {
      let value = this.get('professional_indemnity_certificate_expiry');
      return this.get('professional_indemnity_certificate_ids').length == 0 ||
             dateValid(value) && dateInRange(value);
  }),

  product_liability_certificate_ids: DS.attr('json'),
  product_liability_certificate_expiry: DS.attr('string'),
  product_liability_certificate_expiry_valid: computed(
    'product_liability_certificate_ids',
    'product_liability_certificate_ids.[]',
    'product_liability_certificate_expiry',
    function() {
      let value = this.get('product_liability_certificate_expiry');
      return this.get('product_liability_certificate_ids').length == 0 ||
             dateValid(value) && dateInRange(value);
  }),

  workers_compensation_certificate_ids: DS.attr('json'),
  workers_compensation_certificate_expiry: DS.attr('string'),
  workers_compensation_certificate_expiry_valid: computed(
    'workers_compensation_certificate_ids',
    'workers_compensation_certificate_ids.[]',
    'workers_compensation_certificate_expiry',
    function() {
      let value = this.get('workers_compensation_certificate_expiry');
      return this.get('workers_compensation_certificate_ids').length == 0 ||
             dateValid(value) && dateInRange(value);
  }),

  signal: DS.attr('number', { defaultValue: 0 }),
});
