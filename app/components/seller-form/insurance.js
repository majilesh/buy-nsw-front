import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveForm() {
      this.form.save();
    }
  }
});
