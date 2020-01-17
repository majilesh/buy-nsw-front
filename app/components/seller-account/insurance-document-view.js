import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  fileService: inject(),
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
