import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
});

export default Model.extend(Validations, {
  methodologies: DS.attr('string'),
  knowledge_base: DS.attr('string'),
  quality_control: DS.attr('string'),
  security: DS.attr('string'),
});
