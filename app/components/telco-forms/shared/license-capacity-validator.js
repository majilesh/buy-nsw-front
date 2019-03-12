import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  maxLicenses: computed('product.user_licenses', function() {
    var max = 0, arrayField = (this.get('product.user_licenses') || '').trim();
    if (arrayField != "") {
      arrayField.split(',').forEach(function(value){
        max = Math.max(max, value);
      });
    }
    return max;
  }),
  maxCapacity: computed('product.capacity_simultaneous_calls', function() {
    var max = 0, arrayField = (this.get('product.capacity_simultaneous_calls') || '').trim();
    if (arrayField != "") {
      arrayField.split(',').forEach(function(value){
        max = Math.max(max, value);
      });
    }
    return max;
  }),
  valid: computed('maxLicenses', 'maxCapacity', function() {
    return this.get('maxLicenses') >= this.get('maxCapacity');
  }),
});
