import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      products: this.store.findAll('product')
    });
  },
  actions: {
    willTransition() {
      this.controller.set('pageAlertMessage', null);
    },
  }
});
