import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    error: function(error) {
      this.transitionTo('/');
      return false;
    }
  }
});
