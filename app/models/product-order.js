import DS from 'ember-data';

export default DS.Model.extend({
  estimatedContractValue: DS.attr('number'),
  contactedSeller: DS.attr('string'),
  purchasedCloudBefore: DS.attr('string'),
  product_id: DS.attr('string'),
});
