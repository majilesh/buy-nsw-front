import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createProduct() {
      var controller = this;
      this.store.createRecord('product').save().then(function(newProduct) {
        controller.transitionToRoute('product', newProduct);
      });
    }
  }
});
