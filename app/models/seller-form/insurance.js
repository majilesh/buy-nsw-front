import DS from 'ember-data';

export default DS.Model.extend({
  financial_statement_ids: DS.attr('json'),
});
