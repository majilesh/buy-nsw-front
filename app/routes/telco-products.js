import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      products: this.store.findAll('telco-product').then(function(products) {
        var result = {};
        products.forEach(function(product) {
          result[product.category] = product;
        });
        return result;
        // make a hash from category to obejct
      })
    })
  }
});
