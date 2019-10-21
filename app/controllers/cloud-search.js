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
    this.get('overlay').show('count');
    this.get('ajax').request('/api/products/public_products/count', {
      method: 'GET',
      data: this.filters()
    }).then( (response) => this.set('productsCount', response.totalCount) )
    .catch((error) => this.get('auth').authenticateIfUnauthorized(error))
    .finally(() => this.get('overlay').hide('count'))
  },

  updateResults() {
    this.get('overlay').show('search');
    let self = this;
    this.store.query('public-product', this.filters()).then((products) => {
      self.set('products', products);
    }).finally(()=> this.get('overlay').hide('search'));
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
