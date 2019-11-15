import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('pageNum', 1);
    controller.set('identifiers', []);
    controller.set('services', []);
    controller.set('govdc', []);
    controller.set('term', '');
    controller.updateCounts();
    controller.updateResults();
  }
});
