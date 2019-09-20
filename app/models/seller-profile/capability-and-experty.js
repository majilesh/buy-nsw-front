import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  methodologies: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Do not use < and > characters.',
      }),
    ]
  },
  knowledge_base: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Do not use < and > characters.',
      }),
    ]
  },
  quality_control: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Do not use < and > characters.',
      }),
    ]
  },
  security: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[^<>]*$/,
        message: 'Do not use < and > characters.',
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
