import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.queryRecord('user', {current: true});
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
