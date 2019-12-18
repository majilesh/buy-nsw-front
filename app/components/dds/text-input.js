import Component from '@ember/component';
import layout from '../../templates/components/dds/text-input';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  classNameBindings: ['isSimple:text-pair:row'],
  displayError: computed('showError', 'hasChanged', 'field', function() {
      return this.get('showError') || this.get('hasChanged') ||
      ( this.get('field') != null && this.get('field') != '' );
  }),
  actions: {
    keyUp() {
      if(this.get('apiError')) {
        this.set('apiError', '');
      }
      this.set('hasChanged', true);
      if (this.get('keyUp')) {
        this.keyUp();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    },
    focusOut() {
      this.set('hasChanged', true);
      if (this.get('focusOut')) {
        this.focusOut();
      }
      if(this.get('signal') != undefined) {
        this.incrementProperty('signal');
      }
    }
  }
});
