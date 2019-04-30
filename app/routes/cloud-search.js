import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    this.set('section', params.section);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('section', this.get('section'));
  },
});
