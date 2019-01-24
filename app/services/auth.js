import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  user: null,
  config: null,
  csrfToken: null,

  handleSuccess(response) {
    this.set('user', response.user);
    this.set('config', response.config);
    this.set('csrfToken', response.csrf_token);
  },

  handleError() {
   // TODO: Log or send to Airbrake
  },

  init() {
    this._super(...arguments);
    this.get('ajax').request('/authenticate')
      .then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.handleError(response, jqXHR, payload));
  },
});
