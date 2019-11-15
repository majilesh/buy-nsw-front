import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  apiErrors: DS.attr('json'),
  engagements: DS.attr('json'),
  awards: DS.attr('json'),
});
