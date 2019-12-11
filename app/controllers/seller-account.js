import BaseController from './base-controller';
import { inject } from '@ember/service';

export default BaseController.extend({
  fileService: inject(),
  bjax: inject(),

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
