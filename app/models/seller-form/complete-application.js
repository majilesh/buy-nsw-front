import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  agreed: {
    validators: [
      validator('inline', {
        message: 'The above agreement is required for submission',
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
  agreed: DS.attr('boolean'),
  agreed_at_date: DS.attr('string'),
  agreed_by_email: DS.attr('string'),
  representative_email: DS.attr('string'),
  representative_user_status: DS.attr('string'),
});
