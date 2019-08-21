import DS from 'ember-data';

export default DS.Model.extend({
  original_filename: DS.attr('string'),
  size: DS.attr('number'),
  url: DS.attr('string'),
  extension: DS.attr('string'),
});
