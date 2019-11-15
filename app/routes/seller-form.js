import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  auth: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  model(params) {
    this.set('stepName', params.step_name);
    return RSVP.hash({
      form: this.store.queryRecord("seller-form/" + params.step_name, { current: true }),
      seller: this.store.queryRecord('seller', { current: true }),
      steps: this.get('ajax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      })
    });
  },
  afterModel(model, transition) {
    if (! model.seller.underEdit) {
      this.transitionTo('supplier-application');
    }
  },
  actions: {
    didTransition() {
      this.controller.set('stepName', this.get('stepName'));
      this.controller.set('showError', false);
      return true;
    },
  }
});
