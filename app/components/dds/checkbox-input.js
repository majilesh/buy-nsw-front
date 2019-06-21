import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggle() {
      this.toggleProperty('field');
      if (this.get('onChange')) {
        this.onChange();
      }
    }
  }
});
