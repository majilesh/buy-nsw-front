import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  state: DS.attr('string'),
  category: DS.attr('string'),
  sla_availability_requirement: DS.attr('string'),
  availability: DS.attr({ defaultValue: function() { return ""; } }),
  secondary_services_available: DS.attr('string'),
  location_destination_reach: DS.attr('string', { defaultValue: function() { return ""; } }),
  locations: DS.attr('string', { defaultValue: function() { return ""; } }),
  intra_regional_locations: DS.attr({ defaultValue: function() { return ""; } }),
  inter_regional_destinations: DS.attr({ defaultValue: function() { return ""; } }),
  committed_symmetrical_bandwidth: DS.attr({ defaultValue: function() { return ""; } }),
  contended_asymmetrical_bandwidth: DS.attr({ defaultValue: function() { return ""; } }),
  user_licenses: DS.attr({ defaultValue: function() { return ""; } }),
  capacity_simultaneous_calls: DS.attr({ defaultValue: function() { return ""; } }),
  flagfall_requirement: DS.attr({ defaultValue: function() { return ""; } }),
  call_types: DS.attr({ defaultValue: function() { return ""; } }),
  call_origins: DS.attr({ defaultValue: function() { return ""; } }),
  call_destinations: DS.attr({ defaultValue: function() { return ""; } }),
  countries: DS.attr({ defaultValue: function() { return ""; } }),
  back_end_types: DS.attr({ defaultValue: function() { return ""; } }),
  client_types: DS.attr({ defaultValue: function() { return ""; } }),
  base_requirements: DS.attr({ defaultValue: function() { return ""; } }),
  device_types: DS.attr({ defaultValue: function() { return ""; } }),
  provision_delivery: DS.attr({ defaultValue: function() { return ""; } }),
  client_management: DS.attr({ defaultValue: function() { return ""; } }),
  number_of_consoles: DS.attr({ defaultValue: function() { return ""; } }),
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
