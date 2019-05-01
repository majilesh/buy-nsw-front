import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  ajax: inject(),
  pageNum: 1,
  products: null,
  productsCount: 0,

  title: computed('section', function() {
    let section = this.get('section');
    if(section == 'applications-software') {
      return 'Applications and software';
    }else if(section == 'hosting-infrastructure') {
      return 'Hosting and infrastructure';
    }
    return section;
  }),

  init() {
    this._super();
    this.set('pageNum', 1);
    this.set('audience', '');
    this.set('characteristic', '');
    this.set('pricing', '');
    this.set('identifiers', '');
    this.set('security', '');
    this.set('government_network_type', '');
    this.set('term', '');
    this.updateCounts();
    this.updateResults();
  },

  filters() {
    var params = { with_section: this.get('section') };
    for (var key of [
      'audience',
      'characteristic',
      'pricing',
      'identifiers',
      'security',
      'government_network_type',
    ]) {
      var value = this.get(key);
      if(value) {
        params['with_' + key] = value.split(',');
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
    },
    lastPage() {
      this.decrementProperty('pageNum')
    },
  }
});
