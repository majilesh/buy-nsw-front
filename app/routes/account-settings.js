import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('login');
  },
  model() {
    return this.store.queryRecord('user', {current: true});
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('apiError', null);
    controller.set('newPassword', '');
    controller.set('confirmPassword', '');
    controller.set('currentPassword', '');
  },
  actions: {
    willTransition() {
      var model = this.controller.get('model');
      if (model.hasDirtyAttributes) {
        model.rollbackAttributes();
      }
      this.store.unloadAll('user');
    },
  }
});
