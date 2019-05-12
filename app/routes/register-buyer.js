import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('buyer');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('step', 'one');
  },
  actions: {
    willTransition() {
      this.store.unloadAll('buyer');
    },
  }
});
