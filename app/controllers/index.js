import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  auth: inject(),
  actions: {
    logout() {
      this.get("auth").logout();
    }
  },
});
