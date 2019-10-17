import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  auth: inject(),

  activate: function() {
    if(!this.get('auth.isSeller')) {
      this.transitionTo('access-forbidden');
    }
  },
  model() {
    return RSVP.hash({
      seller: this.store.queryRecord('seller', { current: true }),
      steps: this.get('ajax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      })
    });
  },
});
