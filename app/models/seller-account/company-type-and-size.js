import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

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
  apiErrors: DS.attr('json'),
  number_of_employees: DS.attr('string'),
  australia_employees: DS.attr('string'),
  nsw_employees: DS.attr('string'),
  business_structure: DS.attr('string'),
  annual_turnover: DS.attr('string'),
  overseas: DS.attr('boolean'),
  companySizeOptions: [
    { value: 'sole', label: '1'},
    { value: '2to4', label: '2-4'},
    { value: '5to19', label: '5-19'},
    { value: '20to49', label: '20-49'},
    { value: '50to99', label: '50-99'},
    { value: '100to199', label: '100-199'},
    { value: '200plus', label: 'More than 200 employees'},
  ],
  companySizeOptionsWithZero: [
    { value: 'zero', label: '0'},
    { value: 'sole', label: '1'},
    { value: '2to4', label: '2-4'},
    { value: '5to19', label: '5-19'},
    { value: '20to49', label: '20-49'},
    { value: '50to99', label: '50-99'},
    { value: '100to199', label: '100-199'},
    { value: '200plus', label: 'More than 200 employees'},
  ],
  companySizeOptionsAu: computed('number_of_employees', function () {
    let options = this.get('companySizeOptionsWithZero');
    let totalNum = this.get('number_of_employees');
    let flag = false;
    return options.filter((e) => {
      if (flag) {
        return false;
      } else {
        if(e.value == totalNum) {
          flag = true;
        }
        return true;
      }
    });
  }),
  companySizeOptionsNsw: computed('number_of_employees', 'australia_employees', function () {
    let options = this.get('companySizeOptionsWithZero'),
        totalNum = this.get('number_of_employees'),
        auNum = this.get('australia_employees');
    let flag = false;
    return options.filter((e) => {
      if (flag) {
        return false;
      } else {
        if(e.value == totalNum || e.value == auNum) {
          flag = true;
        }
        return true;
      }
    });
  }),
  turnoverOptions: [
    { value: 'under-3m', label: 'Under $3M'},
    { value: '3m-10m', label: '$3M - $10M'},
    { value: '10m-25m', label: '$10M - $25M'},
    { value: '25m-50m', label: '$25M - $50M'},
    { value: '50m-100m', label: '$50M - $100M'},
    { value: 'over-100m', label: 'Over $100M'},
  ],
  number_of_employees_label: computed(
    'number_of_employees',
    function() {
      return this.get('companySizeOptionsWithZero').find((e) => e.value == this.get('number_of_employees')).label;
  }),
  australia_employees_label: computed(
    'australia_employees',
    function() {
      return this.get('companySizeOptionsWithZero').find((e) => e.value == this.get('australia_employees')).label;
  }),
  nsw_employees_label: computed(
    'nsw_employees',
    function() {
      return this.get('companySizeOptionsWithZero').find((e) => e.value == this.get('nsw_employees')).label;
  }),
  annual_turnover_label: computed(
    'annual_turnover',
    function() {
      return this.get('turnoverOptions').find((e) => e.value == this.get('annual_turnover')).label;
  })
});
