import Controller from '@ember/controller';

export default Controller.extend({
  validationErrors: null,
  actions: {
    saveProduct() {
      var self = this;
      this.model.product.save().then(function() {
        self.set('validationErrors', null);
        self.transitionToRoute('telco-products');
      }).catch(function() {
        self.set('validationErrors', 'Please address all issues indicated below, before adding this product!');
        window.scrollTo(0,0);
      });
    },
    cancelChanges() {
      this.get('router').transitionTo('telco-products');
    }
  }
});
