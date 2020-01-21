import BaseController from './base-controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default BaseController.extend({
  fileService: inject(),
  bjax: inject(),
  preserveScrollPosition: true,

  submitable: computed('model.steps', 'model.form', function() {
    return this.get('model.seller.steps').some( (key) => {
      let step = this.get('model.steps.'+key.replace(/-/g, '_'));
      return step.status == 'editted';
    }) && this.get('model.form');
  }),

  actions: {
    refresh() {
      let controller = this;
      this.model.seller.reload();
      this.model.form.reload();
      this.get('bjax').request('/api/sellers/sellers/steps?account=true', {
        method: 'GET',
      }).then(response => controller.set('model.steps', response));
    },
    submitProfile() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.submit().then(() => {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
    withdrawSubmission() {
      this.get('overlay').show();
      var controller = this;
      this.model.seller.withdraw().then(() => {
        controller.send('refresh');
      }).finally(() => controller.get('overlay').hide());
    },
  }
});
