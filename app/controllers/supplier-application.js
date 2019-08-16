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
        .finally(() => $('.overlay').hide());
    },
    submitProfile() {
      $('.overlay').show();
      var controller = this;
      this.model.seller.submit().then(function() {
        controller.send('refresh');
      }).finally(() => $('.overlay').hide());
    },
    cancelProfile() {
      $('.overlay').show();
      var controller = this;
      this.model.seller.cancel().then(function(response) {
        controller.send('refresh');
      }).finally(() => $('.overlay').hide());
    },
    withdrawSubmission() {
      $('.overlay').show();
      var controller = this;
      this.model.seller.withdraw().then(function(response) {
        controller.send('refresh');
      }).finally(() => $('.overlay').hide());
    },
    reviseProfile() {
      $('.overlay').show();
      var controller = this;
      this.model.seller.revise().then(function(response) {
        controller.send('refresh');
      }).finally(() => $('.overlay').hide());
    },
    amendProfile() {
      $('.overlay').show();
      var controller = this;
      this.model.seller.startAmendment().then(function(response) {
        controller.send('refresh');
      }).finally(() => $('.overlay').hide());
    },
  }
});
