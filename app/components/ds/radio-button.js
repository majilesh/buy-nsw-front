import Component from '@ember/component';

export default Component.extend({
  actions: {
    selectRadio() {
      this.set('field', this.get('value'));
      this.onChange();
    }
  }
});
