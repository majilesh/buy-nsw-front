import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  documents: computed('field', function() {
    let ids = this.get('field');

    if (!this.get('multiple') && ids != null) {
      ids = [ ids ];
    }

    if (ids.length > 0) {
      return this.get('store').query('document', { ids: ids });
    } else {
      return [];
    }
  }),
});
