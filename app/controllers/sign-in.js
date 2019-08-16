import BaseController from './base-controller';
import { inject } from '@ember/service';

export default BaseController.extend({
  auth: inject(),
  actions: {
    login() {
      this.get('auth').login(this.get('email'), this.get('password'), this.get('remember'));
    }
  },
});
