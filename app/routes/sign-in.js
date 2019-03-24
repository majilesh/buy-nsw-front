import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  auth: inject,
  init() {
    this._super(...arguments);
    let self = this;
    this.get('auth').ifLoggedin(function() {
      self.transitionTo('/');
    });
  },
});
