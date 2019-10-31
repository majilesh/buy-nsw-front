import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('buyer-only');
  },
  model(params) {
    return RSVP.hash({
      product: this.store.findRecord('public-product', params.product_id),
      order: this.store.createRecord('product-order'),
    });
  },
  actions: {
    willTransition() {
      this.store.unloadAll('product-order');
    },
  }
});
