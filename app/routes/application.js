import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  auth: service(),
  overlay: service(),
  metrics: service(),
  router: service(),
  airbrake: service(),

  actions: {
    loading: function(transition, originRoute) { // eslint-disable-line no-unused-vars
      let overlay = this.get('overlay');
      overlay.show();
      transition.promise.finally(() => {
        // overlay.hide();
      });

      return true;
    },
    didTransition: function() {
      const page = this.router.currentURL;
      const title = this.router.currentRouteName || 'unknown';
      this.metrics.trackPage({ page, title, siteSpeedSampleRate: 10 });

      this.get('overlay').hide();
      this.get('auth').authenticate();
    },
    error: function(response, transition) {
      let error = response;
      if (error && error.errors && Array.isArray(error.errors)) {
        error = error.errors[0];
      }
      if ( error && error.status == 401 ) {
        this.get('auth').transitToSignin();
      } else if ( error && error.status == 403 ) {
        this.get('auth').reauthenticate();
        this.get('overlay').showCsrfError();
      } else if ( error && error.status == 404 ) {
        this.transitionTo('404');
      } else if ( error && error.status == 405 ) {
        this.transitionTo('access-forbidden');
      } else if ( error && error.status == 422 && error.payload.errors && error.payload.errors[0].alert) {
        this.get('overlay').showError(error.payload.errors[0].alert);
      } else {
        let airbrake = this.get('airbrake');
        let airError = response.message || "Route transition failed";
        airError = airError.split("Payload")[0];
        let context = {
          title: error.title,
          status: error.status,
          isAdapterError: response.isAdapterError,
          transitionRoute: transition.targetName,
          transitionUrl: transition.intent.url,
        };
        airbrake.notify({
          message: airError,
          context: context
        });
        console.error(airError); // eslint-disable-line no-console
      }
      return false;
    }
  },
});
