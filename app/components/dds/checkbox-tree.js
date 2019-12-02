import Component from '@ember/component';
import layout from '../../templates/components/dds/checkbox-tree';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    onChange() {
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      this.set('hasChanged', true);
      if (this.get('onChange')) {
        this.onChange();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
  }
});
