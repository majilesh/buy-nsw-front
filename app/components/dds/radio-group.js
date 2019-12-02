import Component from '@ember/component';
import layout from '../../templates/components/dds/radio-group';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    onChange() {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
