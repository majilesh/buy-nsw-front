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
        dependentKeys: ['receivership', 'receivership_details'],
        message: 'Please provide details',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
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
        dependentKeys: ['bankruptcy', 'bankruptcy_details'],
        message: 'Please provide details',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
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
        dependentKeys: ['investigations', 'investigations_details'],
        message: 'Please provide details',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
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
        dependentKeys: ['legal_proceedings', 'legal_proceedings_details'],
        message: 'Please provide details',
        validate(value, options, model, attributes) { // eslint-disable-line no-unused-vars
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
  apiErrors: DS.attr('json'),

  receivership: DS.attr('string'),
  receivership_details: DS.attr('string'),

  bankruptcy: DS.attr('string'),
  bankruptcy_details: DS.attr('string'),

  investigations: DS.attr('string'),
  investigations_details: DS.attr('string'),

  legal_proceedings: DS.attr('string'),
  legal_proceedings_details: DS.attr('string'),
});
