import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject as service} from '@ember/service';
const {$} = Ember;

export default Route.extend({
  auth: service(),
  metrics: service(),
  router: service(),
  airbrake: service(),

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
      this.metrics.trackPage({ page, title, siteSpeedSampleRate: 10 });

      $('.overlay').hide();
      this.get('auth').authenticate();
    },
    error: function(response) {
      let errors = response.errors;
      if ( errors[0].status == 401 ) {
        this.transitionTo('sign-in');
        this.get('auth').transitToSignin();
      } else {
        let airbrake = this.get('airbrake');
        airbrake.notify(error);
        Ember.Logger.error(error);
        this.transitionTo('index');
      }
      return false;
    }
  },
});
