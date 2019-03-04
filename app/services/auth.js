import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  user: null,
  config: null,
  csrfToken: null,
  isSeller: null,
  trueUser: null,

  goHome() {
    window.location = '/';
  },

  handleSuccess(response) {
    if (response.user == null) {
      this.goHome();
    } else {
      this.set('user', response.user);
      this.set('isAdmin', response.user.roles.includes('admin'));
      this.set('isSeller', response.user.roles.includes('seller'));
      this.set('config', response.config);
      this.set('csrfToken', response.csrf_token);
      this.set('trueUser', response.true_user);
    }
  },

  handleError() {
    this.goHome();
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
