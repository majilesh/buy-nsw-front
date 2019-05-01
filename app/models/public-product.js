import DS from 'ember-data';

export default DS.Model.extend({
  section: DS.attr('string'),
  name: DS.attr('string'),
  summary: DS.attr('string'),
  tags: DS.attr(),
  public_seller_id: DS.attr('string'),
  public_seller_name: DS.attr('string'),
});
