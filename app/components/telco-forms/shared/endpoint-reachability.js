import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  intraRegionalChecked: computed('product.location_destination_reach', function() {
    var arrayField = (this.get('product.location_destination_reach') || '').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('intra-regional');
  }),
  interRegionalChecked: computed('product.location_destination_reach', function() {
    var arrayField = (this.get('product.location_destination_reach') || '').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('inter-regional');
  }),
});
