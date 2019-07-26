import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  feedbacks: DS.attr('json'),
  services: DS.attr('json'),
});
