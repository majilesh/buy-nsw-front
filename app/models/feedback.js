import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  issue: DS.attr('string'),
  url: DS.attr('string'),
  referer: DS.attr('string'),
  browser: DS.attr('string'),
});
