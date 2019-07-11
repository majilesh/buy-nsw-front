import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  roles: DS.attr(),
  seller_id: DS.attr('number'),
  seller: DS.belongsTo('seller'),
  hasSeller: computed('seller', function() {
    return this.seller != null;
  })
});
