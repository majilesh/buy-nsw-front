import BaseController from './base-controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default BaseController.extend({
  bjax: inject(),

  submitable: computed('model.steps', 'model.form.agreed', function() {
    return this.get('model.seller.steps').every( (key) => {
      let step = this.get('model.steps.'+key.replace(/-/g, '_'));
      return step.status == 'done' || (step.optional && step.status == 'todo');
    });
  }),
  actions: {
    refresh() {
      let controller = this;
      this.model.seller.reload();
      this.get('bjax').request('/api/sellers/sellers/steps', {
        method: 'GET',
      }).then(response => controller.set('model.steps', response));
    },
    submitProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.submit().then(function() {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
    cancelProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.cancel().then(function(response) {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
    withdrawSubmission() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.withdraw().then(function(response) {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
    reviseProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.revise().then(function(response) {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
    amendProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.startAmendment().then(function(response) {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
  }
});
