import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  auth: inject(),
  actions: {
    logout() {
      this.get('auth').logout(false);
    }
  }
});
