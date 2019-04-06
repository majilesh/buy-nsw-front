import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('member');
  },
  actions: {
    willTransition() {
      this.store.unloadAll('member');
      this.controller.set('invitationErrors', null);
      this.controller.set('showError', false);
    },
  }
});
