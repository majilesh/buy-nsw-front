import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  state: DS.attr('string'),
  category: DS.attr('string'),
  availability: DS.attr('string'),
  secondary: DS.attr('string'),
  reach: DS.attr('string', { defaultValue: function() { return ""; } }),
  location: DS.attr({ defaultValue: function() { return ""; } }),
  destination: DS.attr({ defaultValue: function() { return ""; } }),
  intraRegional: computed('reach', function() {
    var arrayField = this.get('reach').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('intra-regional');
  }),
  interRegional: computed('reach', function() {
    var arrayField = this.get('reach').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('inter-regional');
  }),
});
