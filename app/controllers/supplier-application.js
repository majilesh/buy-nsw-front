import BaseController from './base-controller';
import { inject } from '@ember/service';

export default BaseController.extend({
  ajax: inject(),

  actions: {
    refresh() {
      let controller = this;
      this.model.seller.reload();
      this.get('ajax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      }).then(response => controller.set('model.steps', response))
        .finally(() => this.get('overlay').hide());
    },
    submitProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.submit().then(function() {
        controller.send('refresh');
      }).finally(() => this.get('overlay').hide());
    },
    cancelProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.cancel().then(function(response) {
        controller.send('refresh');
      }).finally(() => this.get('overlay').hide());
    },
    withdrawSubmission() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.withdraw().then(function(response) {
        controller.send('refresh');
      }).finally(() => this.get('overlay').hide());
    },
    reviseProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.revise().then(function(response) {
        controller.send('refresh');
      }).finally(() => this.get('overlay').hide());
    },
    amendProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.startAmendment().then(function(response) {
        controller.send('refresh');
      }).finally(() => this.get('overlay').hide());
    },
  }
});
