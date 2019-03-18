import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      products: this.store.findAll('product'),
      telco_products: this.store.findAll('telco-product'),
      members: this.store.findAll('user'),
      user: this.store.queryRecord('user', {current: true}),
      seller: this.store.queryRecord('seller', {current: true})
    });
  }
});
