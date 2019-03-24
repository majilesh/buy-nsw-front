import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  auth: inject(),
  actions: {
    login() {
      this.get('auth').login(this.get('email'), this.get('password'), this.get('remember'));
    }
  },
});
