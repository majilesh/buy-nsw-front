import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  ajax: inject(),

  actions: {
    refresh() {
      let controller = this;
      this.model.seller.reload();
      this.get('ajax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      }).then(response => controller.set('model.steps', response));
    },
    submitProfile() {
      var controller = this;
      this.model.seller.submit().then(function() {
        controller.send('refresh');
      });
    },
    cancelProfile() {
      var controller = this;
      this.model.seller.cancel().then(function(response) {
        controller.send('refresh');
      });
    },
    withdrawSubmission() {
      var controller = this;
      this.model.seller.withdraw().then(function(response) {
        controller.send('refresh');
      });
    },
    reviseProfile() {
      var controller = this;
      this.model.seller.revise().then(function(response) {
        controller.send('refresh');
      });
    },
    amendProfile() {
      var controller = this;
      this.model.seller.startAmendment().then(function(response) {
        controller.send('refresh');
      });
    },
  }
});
