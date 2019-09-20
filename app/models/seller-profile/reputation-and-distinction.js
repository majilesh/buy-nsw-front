import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

function filterTrim(a) {
  return a.filter(function(e) {
    return e != null && e.trim() != "";
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

export default Model.extend(Validations, {
  signal: DS.attr('number', { defaultValue: 0 }),
  accreditations: DS.attr('json'),
  accreditation_document_ids: DS.attr('json'),
  licenses: DS.attr('json'),
  license_document_ids: DS.attr('json'),
  accreditation_document_ids_valid: computed(
    'signal',
    function() {
      return filterTrim(this.get('accreditations')).length == 0 ||
             this.get('accreditation_document_ids').length > 0 ;
  }),
  license_document_ids_valid: computed(
    'signal',
    function() {
    return filterTrim(this.get('licenses')).length == 0 ||
           this.get('license_document_ids').length > 0 ;
  }),

  awards: DS.attr('json'),
  engagements: DS.attr('json'),
});
