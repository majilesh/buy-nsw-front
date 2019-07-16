import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  agreed: {
    validators: [
      validator('inline', {
        message: 'Please confirm this agreement before submitting your application',
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
  agreed: DS.attr('boolean'),
  agreed_at: DS.attr('string'),
  agreed_by_email: DS.attr('string'),
  representative_email: DS.attr('string'),
  representative_user_status: DS.attr('string'),
});
