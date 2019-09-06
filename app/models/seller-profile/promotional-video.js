import DS from 'ember-data';
const { Model } = DS;
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

const Validations = buildValidations({
  promotional_video: {
    validators: [
      validator('format', {
        allowBlank: true,
        regex: /^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/,
        message: "Please a valid youtube video ID here."
      })
    ]
  },
});

export default Model.extend(Validations, {
  promotional_video: DS.attr('string'),
});
