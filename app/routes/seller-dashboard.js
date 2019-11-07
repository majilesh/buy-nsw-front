import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  renderTemplate: function() {
    this.render('seller-dashboard', {
      into: 'seller-dashboard'
    });
  },
  model() {
    return RSVP.hash({
      sellersCount: this.get('ajax').request('/api/sellers/public_sellers/stats', {
        method: 'GET',
      }).then( (response) => response.approved ),
      buyersCount: this.get('ajax').request('/api/buyers/buyers/stats', {
        method: 'GET',
      }).then( (response) => response.approved ),
      seller: this.store.queryRecord('seller', {current: true}),
    });
  }
});
