import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('email', '');
    controller.set('apiError', '');
    controller.set('showEmailError', null);
  },
});
