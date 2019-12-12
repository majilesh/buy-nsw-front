import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  methodologies: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Please avoid using "<" and ">"',
      }),
    ]
  },
  knowledge_base: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Please avoid using "<" and ">"',
      }),
    ]
  },
  quality_control: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Please avoid using "<" and ">"',
      }),
    ]
  },
  security: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Please avoid using "<" and ">"',
      }),
    ]
  },
});

export default Model.extend(Validations, {
  methodologies: DS.attr('string'),
  knowledge_base: DS.attr('string'),
  quality_control: DS.attr('string'),
  security: DS.attr('string'),
});
