import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.updateCounts();
    controller.updateResults();
  }
});
