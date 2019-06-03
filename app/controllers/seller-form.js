import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveContinue() {
      this.set('showError', true);
    },
    saveExit() {
      this.set('showError', true);
      this.model.form.save();
    }
  }
});
