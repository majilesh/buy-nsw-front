import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject as service} from '@ember/service';
import { isUnauthorizedError } from 'ember-ajax/errors';
const {$} = Ember;

export default Route.extend({
  auth: service(),
  metrics: service(),
  router: service(),

  actions: {
    loading: function(transition, originRoute) {
      $('.overlay').show();
      transition.promise.finally(() => {
        $('.overlay').hide();
      });

      return true;
    },
    didTransition: function() {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';
      // Increase site sample rate for average page load time to 10%
      // this.metrics.trackPage({ page, title, siteSpeedSampleRate: 10 });
      this.metrics.trackPage({ page, title });

      $('.overlay').hide();
      this.get('auth').reauthenticate();
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
