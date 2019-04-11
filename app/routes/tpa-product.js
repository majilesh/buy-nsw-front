import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  auth: service(),
  model(params) {
    if(this.get('auth').user.roles.includes('buyer')) {
      return this.store.findRecord('telco-product', params.id);
    } else {
      return null;
    }
  },
});
