import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
});

export default Model.extend(Validations, {
  signal: DS.attr('number', { defaultValue: 0 }),
  accreditations: DS.attr('json'),
  accreditation_document_ids: DS.attr('json'),
  licenses: DS.attr('json'),
  license_document_ids: DS.attr('json'),
  awards: DS.attr('json'),
  engagements: DS.attr('json'),
});
