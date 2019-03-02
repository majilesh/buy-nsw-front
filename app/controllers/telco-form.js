import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveProduct() {
      var self = this;
      this.model.product.save().then(function() {
        self.transitionToRoute('telco-products');
      }).catch(function() {
        alert('Saving record failed!');
      });
    },
    cancelChanges() {
      this.get('router').transitionTo('telco-products');
    }
  }
});
