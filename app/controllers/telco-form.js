import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveProduct() {
      var self = this;
      this.model.product.save().then(function(){
        self.transitionToRoute('telco-products');
      })
    },
    cancelChanges() {
      this.get('router').transitionTo('telco-products');
    }
  }
});
