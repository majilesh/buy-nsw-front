import Component from '@ember/component';

export default Component.extend({
  actions: {
    onChange(value) {
      this.set('field', value);
      this.set('hasChanged', true);
    }
  }
});
