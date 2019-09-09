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
    return m.isBetween('1800-01-01', moment().format('YYYY-MM-DD'));
}

const Validations = buildValidations({
  name: {
    validators: [
      validator('presence', true),
    ]
  },
  abn: {
    validators: [
      validator('presence', true),
      validator('format', {
        message: 'Please enter a valid Australian Business Number',
        regex: /^[0-9 ]{11,}$/,
      }),
      validator('inline', {
        message: 'Please enter a valid Australian Business Number',
        validate(value, options, model, attributes) {
          let weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
          let sum = 0;
          let compact = value.replace(/ /g, '');
          if (compact.length != 11) {
            return options.message;
          }
          for(let i = 0; i<11; i++) {
            sum += weights[i] * (compact[i] - (i ? 0 : 1));
          }
          return sum % 89 == 0 ? true : options.message;
        }
      }),
    ]
  },
  establishment_date: {
    validators: [
      validator('inline', {
        message: 'Please enter a valid establishment date',
        validate(value, options, model, attributes) {
          return dateValid(value) ||
                 options.message;
        }
      }),
      validator('inline', {
        message: 'Establishment date can not be later than today',
        validate(value, options, model, attributes) {
          return dateValid(value) && dateInRange(value) ||
                 options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  name: DS.attr('string'),
  abn: DS.attr('string'),
  establishment_date: DS.attr('string'),
});
