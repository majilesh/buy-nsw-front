import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    this.set('sellerId', params.seller_id);
    return RSVP.hash({
      seller: this.store.findRecord('public-seller', params.seller_id),
      products: this.store.query('public-product', { seller_id: params.seller_id })
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('sellerId', this.get('sellerId'));
  },
});
