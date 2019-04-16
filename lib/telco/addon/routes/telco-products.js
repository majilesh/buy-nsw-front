import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('telco-product');
  },
  afterModel(products){
    var result = {};
    products.forEach(function(product) {
      result[product.get('category')] = product;
    });
    this.controllerFor('telco-products').set('categorisedProducts', result);
  }
});
