import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('serviceTower', params.service_tower);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('serviceTower', this.get('serviceTower'));
  },
});
