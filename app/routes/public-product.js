import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('productId', params.product_id);
    return this.store.findRecord('public-product', params.product_id)
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('productId', this.get('productId'));
  },
});
