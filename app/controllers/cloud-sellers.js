import BaseController from './base-controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default BaseController.extend({
  bjax: inject(),
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
    this.get('bjax').request('/api/sellers/public_sellers/count', {
      method: 'GET',
      data: this.filters()
    }, 'count').then( (response) => this.set('sellersCount', response.totalCount) )
  },
  updateResults() {
    this.get('overlay').show('search');
    let self = this;
    this.store.query('public-seller', this.filters()).then((sellers) => {
      self.set('sellers', sellers);
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
