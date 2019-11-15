import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('buyer-only');
  },
  model() {
    return this.store.queryRecord('buyer', { current: true }).then((response) => {
      if (response == null) {
       return this.store.createRecord('buyer');
      } else {
        return response;
      }
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('step', 'one');
  },
  actions: {
    willTransition() {
      this.store.unloadAll('buyer');
    },
  }
});
