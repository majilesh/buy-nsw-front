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
  bankruptcy: {
    validators: [
      validator('presence', true),
    ]
  },
  bankruptcy_details: {
    validators: [
      validator('inline', {
        message: 'Please provide details',
        validate(value, options, model, attributes) {
          return model.bankruptcy == null || model.bankruptcy.toString() == "false" ||
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
            (model.legal_proceedings_details != null && model.legal_proceedings_details != "") ||
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

  bankruptcy: DS.attr('string'),
  bankruptcy_details: DS.attr('string'),

  investigations: DS.attr('string'),
  investigations_details: DS.attr('string'),

  legal_proceedings: DS.attr('string'),
  legal_proceedings_details: DS.attr('string'),
});
