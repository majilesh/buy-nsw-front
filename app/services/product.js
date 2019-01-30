import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  count: null,

  goHome() {
    window.location = '/';
  },

  handleSuccess(response) {
    if (response.count == null) {
      // this.goHome();
    } else {
      this.set('count', response.count);
    }
  },

  handleError() {
    // this.goHome();
  },

  init() {
    this._super(...arguments);
    this.get('ajax').request('/api/products/count')
      .then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.handleError(response, jqXHR, payload));
  },
});
