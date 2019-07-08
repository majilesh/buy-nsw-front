import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  receivership: {
    validators: [
      validator('presence', true),
    ]
  },
  receivership_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.receivership == null || model.receivership.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
  investigations: {
    validators: [
      validator('presence', true),
    ]
  },
  investigations_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.investigations == null || model.investigations.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
  legal_proceedings: {
    validators: [
      validator('presence', true),
    ]
  },
  legal_proceedings_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.legal_proceedings == null || model.legal_proceedings.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
  insurance_claims: {
    validators: [
      validator('presence', true),
    ]
  },
  insurance_claims_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.insurance_claims == null || model.insurance_claims.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
  conflicts_of_interest: {
    validators: [
      validator('presence', true),
    ]
  },
  conflicts_of_interest_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.conflicts_of_interest == null || model.conflicts_of_interest.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
  other_circumstances: {
    validators: [
      validator('presence', true),
    ]
  },
  other_circumstances_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.other_circumstances == null || model.other_circumstances.toString() == "false" ||
            (value != null && value != "") ||
            options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),

  receivership: DS.attr('string'),
  receivership_details: DS.attr('string'),

  investigations: DS.attr('string'),
  investigations_details: DS.attr('string'),

  legal_proceedings: DS.attr('string'),
  legal_proceedings_details: DS.attr('string'),

  insurance_claims: DS.attr('string'),
  insurance_claims_details: DS.attr('string'),

  conflicts_of_interest: DS.attr('string'),
  conflicts_of_interest_details: DS.attr('string'),

  other_circumstances: DS.attr('string'),
  other_circumstances_details: DS.attr('string'),
});
