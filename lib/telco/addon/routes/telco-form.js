import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    var store = this.store;
    return RSVP.hash({
      form_key: params.form_key,
      form_name: params.form_key.replace(/-/g, ' ').replace(/\b[a-z]/g, (s) => s.toUpperCase()),
      component_name: 'telco-forms/' + params.form_key + '-form',
      product: store.query('telco-product', {
        category: params.form_key.replace(/-/g, '_')
      }).then(function(products) {
        var product = products.get('firstObject');
        if(product) {
          return product;
        } else {
          return store.createRecord('telco-product', {category: params.form_key.replace(/-/g, '_')});
        }
      })
    })
  },
  actions: {
    willTransition() {
      var product = this.controller.get('model').product;
      if (product.isNew) {
        // This line returned exception in testing env ( could be build issue )
        // Attempted to handle event `deleteRecord` on <telco-product:null> while in state root.loaded.created.inFlight.
        // product.deleteRecord();
      }
      else if (product.hasDirtyAttributes) {
        product.rollbackAttributes();
      }
      this.store.unloadAll('telco-product');
      this.controller.set('validationErrors', null);
    },
  }
});
