import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  renderTemplate: function() {
    this.render('seller-dashboard', {
      into: 'seller-dashboard'
    });
  },
  model() {
    return RSVP.hash({
      productsCount: this.get('ajax').request('/api/products/products/count', {
        method: 'GET',
      }),
      members: this.store.findAll('member'),
      user: this.store.queryRecord('user', {current: true}),
      seller: this.store.queryRecord('seller', {current: true}),
    });
  }
});
