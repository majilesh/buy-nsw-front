import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  serviceTower: 'all',
  sellers: "",
  services: "",
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
      updateResults();
    },
    changeServiceTower() {
      this.set('services', '');
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
