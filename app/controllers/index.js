import BaseController from './base-controller';

export default BaseController.extend({
  actions: {
    logout() {
      this.get("auth").logout();
    }
  },
});
