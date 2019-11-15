import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  original_filename: DS.attr('string'),
  size: DS.attr('number'),
  url: DS.attr('string'),
  extension: DS.attr('string'),
});
