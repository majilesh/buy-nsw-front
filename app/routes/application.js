export default Ember.Route.extend({

  actions: {
    error: function(reason, transition) {
      this.transitionTo('/');
      return false;
    }
  }

});

