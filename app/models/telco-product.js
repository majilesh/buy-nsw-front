import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  state: DS.attr('string'),
  category: DS.attr('string'),
  sla_availability_requirement: DS.attr('string'),
  secondary_services_available: DS.attr('string'),
  location_destination_reach: DS.attr('string', { defaultValue: function() { return ""; } }),
  intra_regional_locations: DS.attr({ defaultValue: function() { return ""; } }),
  inter_regional_destinations: DS.attr({ defaultValue: function() { return ""; } }),
  intraRegionalChecked: computed('location_destination_reach', function() {
    var arrayField = (this.get('location_destination_reach') || '').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('intra-regional');
  }),
  interRegionalChecked: computed('location_destination_reach', function() {
    var arrayField = (this.get('location_destination_reach') || '').trim();
    if(arrayField=="" || arrayField==null) {
      arrayField = [];
    } else {
      arrayField = arrayField.split(',');
    }
    return arrayField.includes('inter-regional');
  }),
});
