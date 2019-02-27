import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr('string'),
  category: DS.attr('string'),
  availability: DS.attr('string'),
  secondary: DS.attr('string'),
  intraRegional: DS.attr('boolean'),
  interRegional: DS.attr('boolean'),
  locationMetro: DS.attr('boolean'),
  locationRegional: DS.attr('boolean'),
  locationRemote: DS.attr('boolean'),
  destinationMetro: DS.attr('boolean'),
  destinationRegional: DS.attr('boolean'),
  destinationRemote: DS.attr('boolean'),
});
