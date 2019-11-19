import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    this.get('auth').setPageAccess('public');
  },
  model(params) {
    this.set('invitationToken', params.invitation_token);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('invitationToken', this.get('invitationToken'));
    controller.set('password', '');
    controller.set('apiError', null);
  },
});
