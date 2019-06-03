import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    this.set('stepName', params.step_name);
    return RSVP.hash({
      form: this.store.queryRecord("seller-form/" + params.step_name, { current: true }),
    });
  },
  actions: {
    didTransition() {
      this.controller.set('stepName', this.get('stepName'));
      return true;
    },
  }
});
