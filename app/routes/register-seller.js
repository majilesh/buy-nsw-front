import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    if(!this.get('auth.isSeller')) {
      this.transitionTo('access-forbidden');
    }
  },

  model(params) {
    return  this.store.queryRecord('user', {current: true});
  },
  afterModel(model, transition) {
    if (model.seller_id != null) {
      this.transitionTo('supplier-application');
    }
  }
});
