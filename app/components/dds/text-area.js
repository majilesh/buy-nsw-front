import Component from '@ember/component';
import layout from '../../templates/components/dds/text-area';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNameBindings: ['label-text:textarea-pair'],
  displayError: computed('showError', 'hasChanged', 'field', function() {
    return this.get('showError') || this.get('hasChanged');
  }),
  actions: {
    focusOut() {
      this.set('hasChanged', true);
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      if (this.get('focusOut')) {
        this.focusOut();
      }
      if (this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    keyUp() {
      this.set('hasChanged', true);
      if (this.get('keyUp')) {
        this.keyUp();
      }
      if (this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
