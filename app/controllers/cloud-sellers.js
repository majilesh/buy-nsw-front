import BaseController from './base-controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default BaseController.extend({
  ajax: inject(),
  auth: inject(),
  pageNum: 1,
  identifiers: [],
  services: [],
  govdc: [],
  term: '',
  sellers: null,
  sellersCount: 0,
  totalPages: computed('sellersCount', function() {
    return Math.ceil(this.get('sellersCount') / 25);
  }),

  init() {
    this._super();
    this.updateCounts();
    this.updateResults();
  },

  filters() {
    var params = { page: this.get('pageNum'), section: this.get('section') };
    for (var key of [
      'identifiers',
      'services',
      'govdc',
    ]) {
      var value = this.get(key);
      if(value.length) {
        params['with_' + key] = value;
      }
    }
    if(this.get('term')) {
      params['with_term'] = this.get('term');
    }
    return params;
  },
  updateCounts() {
    $('.overlay').show();
    this.get('ajax').request('/api/sellers/public_sellers/count', {
      method: 'GET',
      data: this.filters()
    }).then( (response) => this.set('sellersCount', response.totalCount) )
    .catch((error) => this.get('auth').authenticateIfUnauthorized(error))
    .finally(() => $('.overlay').hide())
  },
  updateResults() {
    this.set('sellers', this.store.query('public-seller', this.filters()));
  },

  actions: {
    search() {
      this.set('pageNum', 1);
      this.updateCounts();
      this.updateResults();
    },
    nextPage() {
      this.incrementProperty('pageNum');
      this.updateResults();
    },
    lastPage() {
      this.decrementProperty('pageNum')
      this.updateResults();
    },
  }
});
