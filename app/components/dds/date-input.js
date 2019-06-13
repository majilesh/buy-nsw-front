import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  present: computed('field', function () {
    let value = this.get('field');
    if (value == "" || value == undefined) {
      return false; 
    }
    return true
  }),

  valid: computed('field', 'present', function () {
    if(this.get('present') == false) {
      return false;
    }
    let value = this.get('field');
    return value.match(/^\d{4}-\d{1,2}-\d{1,2}$/) != null &&
           moment.parseZone(value, 'YYYY-MM-DD').isValid();
  }),

  inRange: computed('field', 'valid', function () {
    if(this.get('valid') == false) {
      return false;
    }
    let value = this.get('field');
    let m = moment.parseZone(value, 'YYYY-MM-DD');
    return m.isBetween(this.get('min'), this.get('max'));
  }),

  min: computed(function() {
    return moment().format('YYYY-MM-DD');
  }),

  max: '2050-01-01',

  inputType: computed('field', function () {
    let value = this.get('field');
    return typeof value;
  }),
});
