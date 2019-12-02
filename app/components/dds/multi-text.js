import Component from '@ember/component';
import layout from '../../templates/components/dds/multi-text';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    addRow() {
      this.field.pushObject('');
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    removeRow(index) {
      this.field.removeAt(index);
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
