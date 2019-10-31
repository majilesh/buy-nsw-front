import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  ajax: inject(),
  auth: inject(),
  overlay: inject(),
  request(url, options, key = 'default') {
    this.get('overlay').show(key);
    return this.get('ajax').request(url, options).catch(error => {
      this.get('auth').authenticateIfUnauthorized(error);
      throw error;
    }).finally(() => this.get('overlay').hide(key));
  }
});
