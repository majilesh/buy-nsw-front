import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  ajax: inject(),
  model(params) {
    this.set('stepName', params.step_name);
    return RSVP.hash({
      form: this.store.queryRecord("seller-form/" + params.step_name, { current: true }),
      steps: this.get('ajax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      })
    });
  },
  actions: {
    didTransition() {
      this.controller.set('stepName', this.get('stepName'));
      return true;
    },
  }
});
