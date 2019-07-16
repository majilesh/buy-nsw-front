import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  financial_statement_confirmed: {
    validators: [
      validator('inline', {
        message: 'Please confirm the validity of attached documents',
        validate(value, options, model, attributes) {
          return model.get('financial_statement_ids').length == 0 || value == true || options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),

  financial_statement_ids: DS.attr('json'),
  financial_statement_confirmed: DS.attr('boolean'),
});
