import Route from '@ember/routing/route';
import Ember from 'ember';
const {$} = Ember;

export default Route.extend({
  actions: {
    loading: function(transition, originRoute) {
      $('.overlay').show();

      transition.promise.finally(() => {
        $('.overlay').hide();
      });

      return true;
    },
    didTransition: function() {
      $('.overlay').hide();
    },
    error: function(error) {
      console.log(error);
      if(error.errors && error.errors.firstObject.detail == "Authentication Failed") {
        this.transitionTo('sign-in');
        return false;
      }
      return true;
    }
  },
});
