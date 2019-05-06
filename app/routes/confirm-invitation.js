import Route from '@ember/routing/route';

export default Route.extend({
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
