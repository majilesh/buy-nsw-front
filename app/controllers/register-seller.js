import Controller from '@ember/controller';

export default Controller.extend({
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
