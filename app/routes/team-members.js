import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    if(!this.get('auth.isSeller')) {
      this.transitionTo('access-forbidden');
    }
  },
  model() {
    return this.store.findAll('member');
  }
});
