import Component from '@ember/component';
import layout from '../../templates/components/dds/date-input';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['date-pair'],
  min: '1800-01-01',
  max: '2100-01-01',
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    focusOut() {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
    }
  }
});
