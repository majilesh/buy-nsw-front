import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveProduct() {
      this.model.product.save().then(function(){
        this.get('router').transitionTo('telco-products');
      })
    },
    cancelChanges() {
      this.get('router').transitionTo('telco-products');
    }
  }
});
