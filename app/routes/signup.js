import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('accountType', params.account_type);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('accountType', this.get('accountType'));
    controller.set('email', '');
    controller.set('password', '');
    controller.set('confirmPassword', '');
    controller.set('showEmailError', null);
    controller.set('showConfirmError', null);
  },
});
