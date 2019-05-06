import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('resetPasswordToken', params.reset_password_token);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('resetPasswordToken', this.get('resetPasswordToken'));
    controller.set('password', '');
    controller.set('confirmPassword', '');
    controller.set('showConfirmError', null);
    controller.set('apiError', null);
  },
});
