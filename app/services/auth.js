import Service from '@ember/service';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import Ember from 'ember';
const {$} = Ember;

export default Service.extend({
  ajax: inject(),
  router: inject(),
  cookieCache: null,

  config: null,
  user: null,
  trueUser: null,
  csrfToken: null,
  message: null,

  checkCookie() {
    var cookie = document.cookie;
    if (cookie != this.get('cookieCache')) {
      this.set('cookieCache', cookie);
      this.authenticate();
    }
  },

  tick: function() {
    this.checkCookie();
    var service = this;
    Ember.run.later(function() {
      service.tick();
    }, 1000);
  },

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
    this.set('user', response.user);
    this.set('trueUser', response.true_user);

    if(goHome) {
      this.set('message', null);
      this.get('router').transitionTo("index");
    }
  },

  handleError(response) {
    if(response.payload.error) {
      this.set('message', response.payload.error);
    } else {
      this.set('message', 'Login failed, please refresh the page!');
    }
  },

  loginFailed() {
  },

  logout(goHome = true) {
    $('.overlay').show();
    this.get('ajax').request('/api/users/logout', {
      method: 'POST',
    }).then((response) =>
        this.handleSuccess(response, goHome))
    .finally(() => $('.overlay').hide())
  },

  login(email, password, remember) {
    $('.overlay').show();
    this.get('ajax').request('/api/users/login', {
      method: 'POST',
      data: {
        email: email,
        password: password,
        remember: remember,
      }
    }).then((response) => this.handleSuccess(response, true))
      .catch((response) => this.handleError(response))
    .finally(() => $('.overlay').hide());
  },

  authenticate() {
    this.get('ajax').request('/api/users/authenticate')
      .then((response) =>
        this.handleSuccess(response, false))
  },

  init() {
    this._super(...arguments);
    this.tick();
  },
});
