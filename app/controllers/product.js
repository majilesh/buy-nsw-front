import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submitProduct() {
      var controller = this;
      this.model.submit().then(function() {
        controller.model.reload();
        controller.transitionToRoute('products');
      });
    },
    cancelProduct() {
      var controller = this;
      this.model.cancel().then(function(response) {
        if(response.deleted) {
          controller.model.deleteRecord();
        } else {
          controller.model.reload();
        }
        controller.transitionToRoute('products');
      });
    },
    withdrawSubmission() {
      var controller = this;
      this.model.withdraw().then(function(response) {
        controller.model.reload();
      });
    },
    reviseProduct() {
      var controller = this;
      this.model.revise().then(function(response) {
        controller.model.reload();
      });
    },
    amendProduct() {
      var controller = this;
      this.model.startAmendment().then(function(response) {
        controller.model.reload();
      });
    },
  }
});
