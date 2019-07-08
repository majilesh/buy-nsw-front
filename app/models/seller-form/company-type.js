import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  number_of_employees: {
    validators: [
      validator('presence', true),
    ]
  },
  corporate_structure: {
    validators: [
      validator('presence', true),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  number_of_employees: DS.attr('string'),
  corporate_structure: DS.attr('string'),
  start_up: DS.attr('boolean'),
  sme: DS.attr('boolean'),
  not_for_profit: DS.attr('boolean'),
  australian_owned: DS.attr('boolean'),
  indigenous: DS.attr('boolean'),
  disability: DS.attr('boolean'),
});
