import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
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
