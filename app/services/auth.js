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
  message: null,

  handleSuccess(response, goHome) {
    this.set('config', response.config);
    this.set('csrfToken', response.csrf_token);
    if (response.user != null) {
      this.set('user', response.user);
      this.set('isAdmin', response.user.roles.includes('admin'));
      this.set('isSeller', response.user.roles.includes('seller'));
      this.set('isBuyer', response.user.roles.includes('buyer'));
      this.set('trueUser', response.true_user);
    } else {
      this.set('user', null);
      this.set('isAdmin', null);
      this.set('isSeller', null); 
      this.set('isBuyer', null);
      this.set('trueUser', null);
    }

    this.set('message', null);
    if(goHome) {
      this.get('router').transitionTo("index");
    }
  },

  handleError() {
    this.set('message', 'Invalid Email or Password');
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
        this.handleSuccess(response, true))
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
    }).then((response) => this.handleSuccess(response, true))
      .catch(() => this.handleError());
  },

  init() {
    this._super(...arguments);
    this.get('ajax').request('/api/users/authenticate')
      .then((response) =>
        this.handleSuccess(response, false))
  },
});
