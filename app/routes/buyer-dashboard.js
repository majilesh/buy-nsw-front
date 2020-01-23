import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('buyer-only');
  },
  renderTemplate: function() {
    this.render('buyer-dashboard', {
      into: 'buyer-dashboard'
    });
  },
  model() {
    return RSVP.hash({
      buyer: this.store.queryRecord('buyer', { current: true }),
      sellerStats: this.get('ajax').request('/api/sellers/public_sellers/stats', {
        method: 'GET',
      })
    });
  }
});
