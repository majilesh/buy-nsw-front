import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createProduct() {
      this.store.createRecord('product').save().then(function(newProduct) {
        console.log(newProduct.id);
      });
    }
  }
});
