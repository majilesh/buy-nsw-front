import BaseController from './base-controller';
import { computed } from '@ember/object';

export default BaseController.extend({
  serviceTower: 'all',
  sellers: "",
  services: "",
  locations: "",
  bandwidth: "",
  terms: "",
  dataPerMonth: "",
  numberOfDevices: "",
  minutes: "",
  simultaneousCalls: "",
  sortBy:  null,
  pageNum: 0,
  pageNumPlusOne: computed('pageNum', function() {
    return this.get('pageNum') + 1;
  }),

  results: [],
  totalPages: 0,

  preserveScrollPosition: true,

  actions: {
    search() {
      this.set('pageNum', 0);
    },
    changeServiceTower() {
      this.set('services', '');
      this.set('locations', '');
      this.set('bandwidth', '');
      this.set('terms', '');
      this.set('dataPerMonth', '');
      this.set('numberOfDevices', '');
      this.set('minutes', '');
      this.set('simultaneousCalls', '');
    },
    nextPage() {
      this.incrementProperty('pageNum');
    },
    lastPage() {
      this.decrementProperty('pageNum');
    },
    updateResults() {
    }
  }
});
