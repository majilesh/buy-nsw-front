import BaseController from './base-controller';

export default BaseController.extend({
  pageAlertMessage: null,
  pageAlertType: null,
  actions: {
    createProduct() {
      var controller = this;
      this.store.createRecord('product').save().then(function(newProduct) {
        controller.transitionToRoute('product', newProduct);
      });
    },
    setAlert(alertParams) {
      this.set('pageAlertMessage', alertParams.pageAlertMessage);
      this.set('pageAlertType', alertParams.pageAlertType);
    }
  }
});
