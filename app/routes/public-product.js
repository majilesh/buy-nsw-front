import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  model(params) {
    return RSVP.hash({
      product: this.store.findRecord('public-product', params.product_id),
    });
  },
});
