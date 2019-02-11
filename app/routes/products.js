import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      firstProduct: this.store.findRecord('product', 1),
      products: this.store.findAll('product')
    });
  }
});
