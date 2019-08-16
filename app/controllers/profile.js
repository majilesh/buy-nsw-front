import BaseController from './base-controller';

export default BaseController.extend({
  actions: {
    submitProfile() {
      var controller = this;
      this.model.submit().then(function() {
        controller.model.reload();
        controller.transitionToRoute('seller-dashboard');
      });
    },
    cancelProfile() {
      var controller = this;
      this.model.cancel().then(function(response) {
        controller.model.reload();
        controller.transitionToRoute('seller-dashboard');
      });
    },
    withdrawSubmission() {
      var controller = this;
      this.model.withdraw().then(function(response) {
        controller.model.reload();
      });
    },
    reviseProfile() {
      var controller = this;
      this.model.revise().then(function(response) {
        controller.model.reload();
      });
    },
    amendProfile() {
      var controller = this;
      this.model.startAmendment().then(function(response) {
        controller.model.reload();
      });
    },
  }
});
