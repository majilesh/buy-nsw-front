import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject(),
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  model(params) {
    this.set('confirmationToken', params.confirmation_token);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('confirmationToken', this.get('confirmationToken'));
    controller.set('password', '');
    controller.set('confirmPassword', '');
    controller.set('showConfirmError', null);
    controller.set('apiError', null);
  },
});
