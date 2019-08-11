import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  number_of_employees: {
    validators: [
      validator('presence', true),
    ]
  },
  australia_employees: {
    validators: [
      validator('presence', true),
    ]
  },
  nsw_employees: {
    validators: [
      validator('presence', true),
    ]
  },
  business_structure: {
    validators: [
      validator('presence', true),
    ]
  },
  annual_turnover: {
    validators: [
      validator('presence', true),
    ]
  },
});

export default DS.Model.extend(Validations, {
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  number_of_employees: DS.attr('string'),
  australia_employees: DS.attr('string'),
  nsw_employees: DS.attr('string'),
  business_structure: DS.attr('string'),
  annual_turnover: DS.attr('string'),
  start_up: DS.attr('boolean'),
  sme: DS.attr('boolean'),
  not_for_profit: DS.attr('boolean'),
  australian_owned: DS.attr('boolean'),
  indigenous: DS.attr('boolean'),
  disability: DS.attr('boolean'),
  overseas: DS.attr('boolean'),
  can_be_startup: DS.attr('boolean'),
});
