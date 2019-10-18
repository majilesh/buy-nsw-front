import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    if(!this.get('auth.isSeller')) {
      // this.transitionTo('access-forbidden');
    }
  },

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
