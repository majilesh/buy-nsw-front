import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  auth: service(),
  model(params) {
    this.set('productId', params.id);
    if (this.get('auth').user && this.get('auth').canBuy) {
      return this.store.findRecord('telco-product', params.id);
    } else {
      return this.store.findRecord('public-telco-product', params.id);
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('productId', this.get('productId'));
  },
});
