import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

function filterTrim(a) {
  return a.filter(function(e) {
    return e.trim() != "";
  });
}

const Validations = buildValidations({
  accreditation_document_ids_valid: {
    validators: [
      validator('inline', {
        message: 'Please provide documents for your accreditations.',
        validate(value, options, model, attributes) {
          return value == true || options.message;
        }
      }),
    ]
  },
  license_document_ids_valid: {
    validators: [
      validator('inline', {
        message: 'Please provide copy of your licenses.',
        validate(value, options, model, attributes) {
          return value == true || options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  accreditations: DS.attr('json'),
  accreditation_document_ids: DS.attr('json'),
  accreditation_document_ids_valid: computed(
    'accreditation_document_ids',
    'accreditation_document_ids.[]',
    'accreditations',
    'accreditations.[]',
    function() {
      return filterTrim(this.get('accreditations')).length == 0 ||
             this.get('accreditation_document_ids').length > 0 ;
  }),
  licenses: DS.attr('json'),
  license_document_ids: DS.attr('json'),
  license_document_ids_valid: computed(
    'license_document_ids',
    'license_document_ids.[]',
    'licenses',
    'licenses.[]',
    function() {
    return filterTrim(this.get('licenses')).length == 0 ||
           this.get('license_document_ids').length > 0 ;
  }),
  signal: DS.attr('number', { defaultValue: 0 }),
});
