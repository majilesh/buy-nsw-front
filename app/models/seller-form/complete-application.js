import DS from 'ember-data';

export default DS.Model.extend({
  agree: DS.attr('boolean'),
  agreed_at: DS.attr('string'),
  agreed_by_id: DS.attr('string'),
});
