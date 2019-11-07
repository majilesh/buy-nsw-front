import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  model() {
    return RSVP.hash({
      sellerStats: this.get('ajax').request('/api/sellers/public_sellers/stats', {
        method: 'GET',
      }),
      buyerStats: this.get('ajax').request('/api/buyers/buyers/stats', {
        method: 'GET',
      }),
      productStats:  this.get('ajax').request('/api/products/public_products/stats', {
        method: 'GET',
      }),
    });
  }
});
