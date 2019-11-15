import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  flagship_product: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[A-Za-z0-9 .'\-_|()@#$%&,\/]*$/,
        message: 'Invalid format',
      }),
    ]
  },
  summary: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Please avoid using \"<\" and \">\"',
      }),
    ]
  },
});

export default Model.extend(Validations, {
  flagship_product: DS.attr('string'),
  summary: DS.attr('string'),
});
