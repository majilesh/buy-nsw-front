import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

function filterTrim(a) {
  return a.filter(function(e) {
    return e.trim() != "";
  });
}

const Validations = buildValidations({
  accreditation_document_ids: {
    validators: [
      validator('inline', {
        message: 'Please provide documents for your accreditations.',
        validate(value, options, model, attributes) {
          return filterTrim(model.get('accreditations')).length == 0 ||
                 model.get('accreditation_document_ids').length > 0 ||
                 options.message;
        }
      }),
    ]
  },
  license_document_ids: {
    validators: [
      validator('inline', {
        message: 'Please provide copy of your licenses.',
        validate(value, options, model, attributes) {
          return filterTrim(model.get('licenses')).length == 0 ||
                 model.get('license_document_ids').length > 0 ||
                 options.message;
        }
      }),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  licenses: DS.attr('json'),
  license_document_ids: DS.attr('json'),
  accreditations: DS.attr('json'),
  accreditation_document_ids: DS.attr('json'),
});
