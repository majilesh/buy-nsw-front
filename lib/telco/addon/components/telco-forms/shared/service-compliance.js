import Component from '@ember/component';

export default Component.extend({
  actions: {
    select(value) {
      this.set('field', value);
      this.onChange();
    }
  }
});
