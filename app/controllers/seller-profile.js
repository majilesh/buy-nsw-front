import BaseController from './base-controller';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default BaseController.extend({
  fileService: inject(),
  bjax: inject(),
  buyerView: computed('auth.user', 'auth.isBuyer', 'model.seller.id', function () {
    return this.get('auth.user') && (
      this.get('auth.isBuyer') && this.get('auth.user').can_buy ||
      this.get('auth.isSeller') && this.get('auth.user').seller_id == this.get('model.seller.id')
    );
  }),
  actions: {
    getDocuments() {
      let self = this;
      this.get('bjax').request('/api/events/events/documents_requested', {
        method: 'POST',
        headers: {
          "X-CSRF-Token": this.get('auth.csrfToken'),
        },
        data: {
          seller_id: self.get('model.seller.id')
        }
      }).then(()=>{
        self.set('showDocumentDownloads', true);
      })
    }
  }
});
