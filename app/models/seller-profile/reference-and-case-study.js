import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
});

export default Model.extend(Validations, {
  signal: DS.attr('number', { defaultValue: 0 }),
  references: DS.attr('json'),
  case_studies: DS.attr('json')
});
