import Service from '@ember/service';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { isUnauthorizedError } from 'ember-ajax/errors';
import { task } from 'ember-concurrency';

export default Service.extend({
  ajax: inject(),
  router: inject(),
  overlay: inject(),
  cookieCache: null,

  config: null,
  user: null,
  trueUser: null,
  csrfToken: null,
  message: null,
  accessType: null,

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
    this.checkPageAccess();
  },

  checkPageAccess() {
    let accessType = this.get('accessType');
    if(accessType != null) {
      if(accessType == 'buyer-only' && !this.get('isBuyer')){
        this.get('router').transitionTo("access-forbidden");
      }
      if(accessType == 'seller-only' && !this.get('isSeller')){
        this.get('router').transitionTo("access-forbidden");
      }
      this.set('accessType', null);
    }
  },

  setPageAccess(accessType) {
    this.set('accessType', accessType);
    if(this.get('config') != null) {
      this.checkPageAccess();
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
    this.get('overlay').show();
    this.get('ajax').request('/api/users/logout', {
      method: 'POST',
    }).then((response) => {
      this.handleSuccess(response);
      if(goHome) {
        this.set('message', null);
        this.get('router').transitionTo("index");
      }
    })
    .finally(() => this.get('overlay').hide())
  },

  login(email, password, remember) {
    let overlay = this.get('overlay');
    overlay.show('login');
    this.get('ajax').request('/api/users/login', {
      method: 'POST',
      data: {
        email: email,
        password: password,
        remember: remember,
      }
    }).then((response) => {
      // this.handleSuccess(response);
      // this.set('message', null);
      // this.get('router').transitionTo("index");
      if(this.get('locationHref')) {
        let loc = this.get('locationHref');
        this.set('locationHref', null);
        window.location = loc;
      } else {
        window.location = '/';
      }
    }).catch((response) => {
      this.handleError(response);
      overlay.hide('login');
    });
  },

  reauthenticateTask: task(function * () {
    this.get('overlay').show('auth');
    let response = yield this.get('ajax').request('/api/users/authenticate');
    this.handleSuccess(response);
    this.get('overlay').hide('auth');
  }).maxConcurrency(1).enqueue(),

  authenticateTask: task(function * () {
    if (this.get('config') == null) {
      this.get('overlay').show('auth');
      let response = yield this.get('ajax').request('/api/users/authenticate');
      this.handleSuccess(response);
      this.get('overlay').hide('auth');
    }
  }).maxConcurrency(1).enqueue(),

  reauthenticate() {
    this.get('reauthenticateTask').perform();
  },

  authenticate() {
    this.get('authenticateTask').perform();
  },

  authenticateIfUnauthorized(error) {
    if (isUnauthorizedError(error)) {
      this.authenticate();
      return;
    }
  },

  transitToSignin() {
    this.set('locationHref', window.location.href)
    this.get('router').transitionTo("sign-in");
  },

  init() {
    this._super(...arguments);
    this.authenticate();
  },
});
