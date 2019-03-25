import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),
  router: inject(),

  user: null,
  config: null,
  csrfToken: null,
  isSeller: null,
  isBuyer: null,
  trueUser: null,

  callbacks: [],

  ifLoggedin(callback) {
    if(this.get('config')) {
      if(this.get('user')) {
        callback();
      }
    } else {
      this.get('callbacks').push(callback);
    }
  },

  handleSuccess(response) {
    this.set('config', response.config);
    this.set('csrfToken', response.csrf_token);
    if (response.user != null) {
      this.set('user', response.user);
      this.set('isAdmin', response.user.roles.includes('admin'));
      this.set('isSeller', response.user.roles.includes('seller'));
      this.set('isBuyer', response.user.roles.includes('buyer'));
      this.set('trueUser', response.true_user);

      this.get('callbacks').forEach(function(callback) {
        callback();
      });
      this.set('callbacks', []);
      this.get('router').transitionTo("index");
    } else {
      this.set('user', null);
      this.set('isAdmin', null);
      this.set('isSeller', null); 
      this.set('isBuyer', null);
      this.set('trueUser', null);
    }
  },

  handleError() {
  },

  loginFailed() {
  },

  logout() {
    this.get('ajax').request('/api/users/logout', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": this.get('csrfToken'),
      },
    }).then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.loginFailed(response, jqXHR, payload));
  },

  login(email, password, remember) {
    this.get('ajax').request('/api/users/login', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": this.get('csrfToken'),
      },
      data: {
        email: email,
        password: password,
        remember: remember,
      }
    }).then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.loginFailed(response, jqXHR, payload));
  },

  init() {
    this._super(...arguments);
    this.get('ajax').request('/api/users/authenticate')
      .then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.handleError(response, jqXHR, payload));
  },
});
