import DS from 'ember-data';
import { alias } from '@ember/object/computed';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  issue: validator('presence', true),
  task: validator('presence', true),
});

export default DS.Model.extend(Validations, {
  task: DS.attr('string'),
  issue: DS.attr('string'),
  url: DS.attr('string'),
  referer: DS.attr('string'),
  browser: DS.attr('string'),

  isInvalid: alias('validations.isInvalid'),
});
