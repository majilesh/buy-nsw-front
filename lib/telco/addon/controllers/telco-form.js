import BaseController from './base-controller';

export default BaseController.extend({
  validationErrors: null,
  actions: {
    saveProduct() {
      var self = this;
      this.model.product.save().then(function() {
        self.transitionToRoute('telco-products');
      }).catch(function() {
        self.set('validationErrors', 'Please address all issues indicated below, before adding this product!');
        window.scrollTo(0,230);
      });
    },
  }
});
