import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },

  model(params) {
    return this.store.findRecord('product', params.product_id);
  }
});
