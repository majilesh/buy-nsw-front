import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  model(params) {
    this.set('section', params.section);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('section', this.get('section'));
    controller.set('pageNum', 1);
    controller.set('audience', []);
    controller.set('characteristic', []);
    controller.set('pricing', []);
    controller.set('identifiers', []);
    controller.set('security', []);
    controller.set('government_network_type', []);
    controller.set('term', '');
    controller.updateCounts();
    controller.updateResults();
  },
});
