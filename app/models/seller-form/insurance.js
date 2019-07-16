import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
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
  professional_indemnity_certificate_expiry: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) {
          return model.get('professional_indemnity_certificate_ids').length == 0 ||
                 dateValid(value) ||
                 options.message;
        }
      }),
      validator('inline', {
        message: 'Expiry date can not be earlier than today',
        validate(value, options, model, attributes) {
          return model.get('professional_indemnity_certificate_ids').length == 0 ||
                 dateValid(value) && dateInRange(value) ||
                 options.message;
        }
      }),
    ]
  },
  product_liability_certificate_expiry: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) {
          return model.get('product_liability_certificate_ids').length == 0 ||
                 dateValid(value) ||
                 options.message;
        }
      }),
      validator('inline', {
        message: 'Expiry date can not be earlier than today',
        validate(value, options, model, attributes) {
          return model.get('product_liability_certificate_ids').length == 0 ||
                 dateValid(value) && dateInRange(value) ||
                 options.message;
        }
      }),
    ]
  },
  workers_compensation_certificate_expiry: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid expiry date',
        validate(value, options, model, attributes) {
          return model.get('workers_compensation_certificate_ids').length == 0 ||
                 dateValid(value) ||
                 options.message;
        }
      }),
      validator('inline', {
        message: 'Expiry date can not be earlier than today',
        validate(value, options, model, attributes) {
          return model.get('workers_compensation_certificate_ids').length == 0 ||
                 dateValid(value) && dateInRange(value) ||
                 options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  professional_indemnity_certificate_ids: DS.attr('json'),
  product_liability_certificate_ids: DS.attr('json'),
  workers_compensation_certificate_ids: DS.attr('json'),

  professional_indemnity_certificate_expiry: DS.attr('string'),
  product_liability_certificate_expiry: DS.attr('string'),
  workers_compensation_certificate_expiry: DS.attr('string'),
});
