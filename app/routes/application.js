import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject as service} from '@ember/service';
import { isUnauthorizedError } from 'ember-ajax/errors';
const {$} = Ember;

export default Route.extend({
  auth: service(),
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
      //if (isUnauthorizedError(error)) {
        this.get('auth').authenticate();
        this.transitionTo('sign-in');
        return false;
      //}
      //return true;
    }
  },
});
