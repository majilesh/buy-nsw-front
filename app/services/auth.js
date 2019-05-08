import Service from '@ember/service';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import Ember from 'ember';
const {$} = Ember;

export default Service.extend({
  ajax: inject(),
  router: inject(),

  user: null,
  config: null,
  csrfToken: null,
  trueUser: null,
  message: null,

  isSeller: computed('user.roles', function() {
    let roles = this.get('user.roles');
    return roles && roles.includes('seller');
  }),
  isBuyer: computed('user.roles', function() {
    let roles = this.get('user.roles');
    return roles && roles.includes('buyer');
  }),
  isAdmin: computed('user.roles', function() {
    let roles = this.get('user.roles');
    return roles && roles.includes('admin');
  }),

  handleSuccess(response, goHome) {
    this.set('config', response.config);
    this.set('csrfToken', response.csrf_token);
    if (response.user != null) {
      this.set('user', response.user);
      this.set('trueUser', response.true_user);
    } else {
      this.set('user', null);
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

  logout(goHome = true) {
    $('.overlay').show();
    this.get('ajax').request('/api/users/logout', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": this.get('csrfToken'),
      },
    }).then((response) =>
        this.handleSuccess(response, goHome))
    .finally(() => $('.overlay').hide())
  },

  login(email, password, remember) {
    $('.overlay').show();
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
      .catch(() => this.handleError())
    .finally(() => $('.overlay').hide());
  },

  authenticate() {
    this.get('ajax').request('/api/users/authenticate')
      .then((response) =>
        this.handleSuccess(response, false))
  },

  init() {
    this._super(...arguments);
    this.authenticate();
  },
});
