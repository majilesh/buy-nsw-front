import BaseController from './base-controller';

export default BaseController.extend({
  actions: {
    startApplication() {
      var controller = this;
      this.store.createRecord('seller').save().then(function(seller){
        seller.store.queryRecord('user', {current: true});
        controller.transitionToRoute('supplier-application');
      });
    }
  }
});
