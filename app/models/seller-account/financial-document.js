import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  financial_statement_confirmed_valid: {
    validators: [
      validator('inline', {
        message: 'Please confirm the validity of attached documents',
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

  financial_statement_ids: DS.attr('json'),
  financial_statement_confirmed: DS.attr('boolean'),
  financial_statement_confirmed_valid: computed(
    'financial_statement_ids',
    'financial_statement_ids.[]',
    'financial_statement_confirmed',
    function() {
      return this.get('financial_statement_ids').length == 0 ||
             this.get('financial_statement_confirmed') == true;
  }),

  signal: DS.attr('number', { defaultValue: 0 }),
});