import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  financial_statement_ids: {
    validators: [
      validator('inline', {
        validate(value, options, model, attributes) {
          return value.length > 0 || "Please select a file";
        }
      }),
    ]
  },
  financial_statement_confirmed: {
    validators: [
      validator('inline', {
        message: 'Please confirm the validity of attached documents',
        validate(value, options, model, attributes) {
          return value == true || options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),

  financial_statement_ids: DS.attr('json'),
  financial_statement_confirmed: DS.attr('boolean'),
});
