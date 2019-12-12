import Component from '@ember/component';
import layout from '../../templates/components/dds/radio-button';

export default Component.extend({
  layout,
  classNameBindings: ['isSimple:radio-pair:au-control-input'],
  actions: {
    selectRadio() {
      this.set('field', this.get('value'));
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
