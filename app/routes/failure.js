import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('message', params.message);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('message', this.get('message'));
  },
});
