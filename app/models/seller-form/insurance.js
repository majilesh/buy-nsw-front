import DS from 'ember-data';

export default DS.Model.extend({
  financial_statement_ids: DS.attr('json'),
  professional_indemnity_certificate_ids: DS.attr('json'),
  workers_compensation_certificate_ids: DS.attr('json'),
});
