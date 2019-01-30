import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),

  seller: null,

  goHome() {
    window.location = '/';
  },

  handleSuccess(response) {
    if (response.seller == null) {
      // this.goHome();
    } else {
      this.set('seller', response.seller);
    }
  },

  handleError() {
    // this.goHome();
  },

  init() {
    this._super(...arguments);
    this.get('ajax').request('/api/sellers/basic_details')
      .then((response) =>
        this.handleSuccess(response))
      .catch(({ response, jqXHR, payload }) =>
        this.handleError(response, jqXHR, payload));
  },
});
