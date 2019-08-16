import BaseController from './base-controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default BaseController.extend({
  ajax: inject(),
  auth: inject(),
  pageNum: 1,
  audience: [],
  characteristic: [],
  pricing: [],
  identifiers: [],
  security: [],
  government_network_type: [],
  term: '',
  products: null,
  productsCount: 0,

  totalPages: computed('productsCount', function() {
    return Math.ceil(this.get('productsCount') / 25);
  }),

  title: computed('section', function() {
    let section = this.get('section');
    if(section == 'applications-software') {
      return 'Applications and software';
    }else if(section == 'hosting-infrastructure') {
      return 'Hosting and infrastructure';
    }else if(section == 'all') {
      return 'All products';
    }
    return section;
  }),

  init() {
    this._super();
    this.updateCounts();
    this.updateResults();
  },

  filters() {
    var params = { page: this.get('pageNum'), with_section: this.get('section') };
    if (this.get('section') == 'all') {
      params = { page: this.get('pageNum') };
    }
    for (var key of [
      'audience',
      'characteristic',
      'pricing',
      'identifiers',
      'security',
      'government_network_type',
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
    this.get('ajax').request('/api/products/public_products/count', {
      method: 'GET',
      data: this.filters()
    }).then( (response) => this.set('productsCount', response.totalCount) )
    .catch((error) => this.get('auth').authenticateIfUnauthorized(error))
    .finally(() => $('.overlay').hide())
  },

  updateResults() {
    this.set('products', this.store.query('public-product', this.filters()));
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
