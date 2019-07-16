import DS from 'ember-data';

export default DS.Model.extend({
  original_filename: DS.attr('string'),
});
