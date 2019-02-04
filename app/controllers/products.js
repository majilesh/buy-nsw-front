import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    clickedOn() {
      this.model.firstProduct.publish();
    }
  }
});
