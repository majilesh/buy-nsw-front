import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('telco-product')
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    var result = {};
    model.forEach(function(product) {
      result[product.category] = product;
    });
    controller.set('productsByCategory', result)
  },
});
