import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  renderTemplate: function() {
    this.render('seller-profile', {
      into: 'seller-profile'
    });
  },
  model(params) {
    return RSVP.hash({
      profile: this.store.findRecord('seller-profile', params.seller_id),
      seller: this.store.findRecord('public-seller', params.seller_id),
    });
  },
});
