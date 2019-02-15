import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submitProduct() {
      this.model.submit();
      this.model.reload();
    },
    cancelProduct() {
      this.model.reload();
    }
  }
});
