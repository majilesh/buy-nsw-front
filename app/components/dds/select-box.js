import Component from '@ember/component';
import layout from '../../templates/components/dds/select-box';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    onChange(value) {
      this.set('field', value);
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
