import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.queryRecord('user', {current: true});
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('apiError', null);
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
