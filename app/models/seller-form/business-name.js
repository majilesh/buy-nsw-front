import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

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
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  name: DS.attr('string'),
  abn: DS.attr('string'),
});
