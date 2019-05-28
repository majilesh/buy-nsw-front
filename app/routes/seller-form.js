import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('stepName', params.step_name);
  },
  actions: {
    didTransition() {
      this.controller.set('stepName', this.get('stepName'));
      return true;
    },
  }
});
