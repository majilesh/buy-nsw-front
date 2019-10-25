import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  model() {
    return this.store.createRecord('member');
  },
  actions: {
    willTransition() {
      this.store.unloadAll('member');
      this.controller.set('invitationErrors', null);
      this.controller.set('showError', false);
    },
  }
});
