import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
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
  companySizeOptionsAu: computed('form.number_of_employees', function () {
    let options = this.get('companySizeOptionsWithZero');
    let totalNum = this.get('form.number_of_employees');
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
  companySizeOptionsNsw: computed('form.number_of_employees', 'form.australia_employees', function () {
    let options = this.get('companySizeOptionsWithZero'),
        totalNum = this.get('form.number_of_employees'),
        auNum = this.get('form.australia_employees');
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
});
