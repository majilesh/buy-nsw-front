import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  professional_indemnity_certificate_ids: DS.attr('json'),
  product_liability_certificate_ids: DS.attr('json'),
  workers_compensation_certificate_ids: DS.attr('json'),

  professional_indemnity_certificate_expiry: DS.attr('string'),
  product_liability_certificate_expiry: DS.attr('string'),
  workers_compensation_certificate_expiry: DS.attr('string'),
});
