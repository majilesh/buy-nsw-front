import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { on } from '@ember/object/evented';

export default Route.extend({
  model(params) {
    var store = this.store;
    return RSVP.hash({
      form_key: params.form_key,
      product: store.query('telco-product', {
        category: params.form_key
      }).then(function(products) {
        var product = products.get('firstObject');
        if(product) {
          return product;
        } else {
          return store.createRecord('telco-product');
        }
      })
    });
  },
  removeProductChanges: on('deactivate', function(){
    var product = this.controller.get('model').product;
    if (product.isNew) {
      product.deleteRecord();
    }
    else if (product.hasDirtyAttributes) {
      product.rollbackAttributes();
    }
  }),
});
