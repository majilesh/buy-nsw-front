import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),
  ajax: inject(),

  activate: function() {
    this.get('auth').setPageAccess('seller-only');
  },
  renderTemplate: function() {
    this.render('seller-account', {
      into: 'seller-account'
    });
  },
  model(params) {
    this.set('stepName', params.step_name);
    return RSVP.hash({
      alertingDocuments: this.get('ajax').request('/api/sellers/sellers/alerting_documents'),
      form: (
        params.step_name == 'login-details' ? this.store.queryRecord("user", {current: true}) :
        this.store.queryRecord("seller-account/" + params.step_name, { current: true }) ),
      seller: this.store.queryRecord('seller', { current: true }),
      steps: this.get('ajax').request('/api/sellers/sellers/steps?account=true', {
        method: 'GET',
      })
    });
  },
  actions: {
    didTransition() {
      this.controller.set('stepName', this.get('stepName'));
      return true;
    },
  }
});
